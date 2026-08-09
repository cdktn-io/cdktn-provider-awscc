# `dataAwsccAutoscalingScalingPolicy` Submodule <a name="`dataAwsccAutoscalingScalingPolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAutoscalingScalingPolicy <a name="DataAwsccAutoscalingScalingPolicy" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/autoscaling_scaling_policy awscc_autoscaling_scaling_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicy(scope Construct, id *string, config DataAwsccAutoscalingScalingPolicyConfig) DataAwsccAutoscalingScalingPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig">DataAwsccAutoscalingScalingPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig">DataAwsccAutoscalingScalingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAutoscalingScalingPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccAutoscalingScalingPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccAutoscalingScalingPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccAutoscalingScalingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/autoscaling_scaling_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAutoscalingScalingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.adjustmentType">AdjustmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.autoScalingGroupName">AutoScalingGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.cooldown">Cooldown</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.estimatedInstanceWarmup">EstimatedInstanceWarmup</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.metricAggregationType">MetricAggregationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.minAdjustmentMagnitude">MinAdjustmentMagnitude</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.policyName">PolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.policyType">PolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.predictiveScalingConfiguration">PredictiveScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.scalingAdjustment">ScalingAdjustment</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.stepAdjustments">StepAdjustments</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList">DataAwsccAutoscalingScalingPolicyStepAdjustmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.targetTrackingConfiguration">TargetTrackingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AdjustmentType`<sup>Required</sup> <a name="AdjustmentType" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.adjustmentType"></a>

```go
func AdjustmentType() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AutoScalingGroupName`<sup>Required</sup> <a name="AutoScalingGroupName" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.autoScalingGroupName"></a>

```go
func AutoScalingGroupName() *string
```

- *Type:* *string

---

##### `Cooldown`<sup>Required</sup> <a name="Cooldown" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.cooldown"></a>

```go
func Cooldown() *string
```

- *Type:* *string

---

##### `EstimatedInstanceWarmup`<sup>Required</sup> <a name="EstimatedInstanceWarmup" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.estimatedInstanceWarmup"></a>

```go
func EstimatedInstanceWarmup() *f64
```

- *Type:* *f64

---

##### `MetricAggregationType`<sup>Required</sup> <a name="MetricAggregationType" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.metricAggregationType"></a>

```go
func MetricAggregationType() *string
```

- *Type:* *string

---

##### `MinAdjustmentMagnitude`<sup>Required</sup> <a name="MinAdjustmentMagnitude" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.minAdjustmentMagnitude"></a>

```go
func MinAdjustmentMagnitude() *f64
```

- *Type:* *f64

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.policyName"></a>

```go
func PolicyName() *string
```

- *Type:* *string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.policyType"></a>

```go
func PolicyType() *string
```

- *Type:* *string

---

##### `PredictiveScalingConfiguration`<sup>Required</sup> <a name="PredictiveScalingConfiguration" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.predictiveScalingConfiguration"></a>

```go
func PredictiveScalingConfiguration() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference</a>

---

##### `ScalingAdjustment`<sup>Required</sup> <a name="ScalingAdjustment" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.scalingAdjustment"></a>

```go
func ScalingAdjustment() *f64
```

- *Type:* *f64

---

##### `StepAdjustments`<sup>Required</sup> <a name="StepAdjustments" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.stepAdjustments"></a>

```go
func StepAdjustments() DataAwsccAutoscalingScalingPolicyStepAdjustmentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList">DataAwsccAutoscalingScalingPolicyStepAdjustmentsList</a>

---

##### `TargetTrackingConfiguration`<sup>Required</sup> <a name="TargetTrackingConfiguration" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.targetTrackingConfiguration"></a>

```go
func TargetTrackingConfiguration() DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAutoscalingScalingPolicyConfig <a name="DataAwsccAutoscalingScalingPolicyConfig" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

&dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/autoscaling_scaling_policy#id DataAwsccAutoscalingScalingPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfiguration <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfiguration" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

&dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfiguration {

}
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

&dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications {

}
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

&dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification {

}
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

&dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries {

}
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

&dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat {

}
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

&dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric {

}
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

&dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions {

}
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

&dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification {

}
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

&dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries {

}
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

&dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat {

}
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

&dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric {

}
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

&dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions {

}
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

&dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification {

}
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

&dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries {

}
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

&dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat {

}
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

&dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric {

}
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

&dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions {

}
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

&dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification {

}
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

&dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification {

}
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

&dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification {

}
```


### DataAwsccAutoscalingScalingPolicyStepAdjustments <a name="DataAwsccAutoscalingScalingPolicyStepAdjustments" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustments.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

&dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicyStepAdjustments {

}
```


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfiguration <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfiguration" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

&dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfiguration {

}
```


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

&dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification {

}
```


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

&dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions {

}
```


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

&dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics {

}
```


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

&dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat {

}
```


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

&dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric {

}
```


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

&dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions {

}
```


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

&dataawsccautoscalingscalingpolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.get"></a>

```go
func Get(index *f64) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.get"></a>

```go
func Get(index *f64) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.dimensions"></a>

```go
func Dimensions() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList</a>

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.stat">Stat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.metric"></a>

```go
func Metric() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference</a>

---

##### `Stat`<sup>Required</sup> <a name="Stat" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.stat"></a>

```go
func Stat() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.metricStat">MetricStat</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.returnData">ReturnData</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `MetricStat`<sup>Required</sup> <a name="MetricStat" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.metricStat"></a>

```go
func MetricStat() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference</a>

---

##### `ReturnData`<sup>Required</sup> <a name="ReturnData" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.returnData"></a>

```go
func ReturnData() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.property.metricDataQueries">MetricDataQueries</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricDataQueries`<sup>Required</sup> <a name="MetricDataQueries" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.property.metricDataQueries"></a>

```go
func MetricDataQueries() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.get"></a>

```go
func Get(index *f64) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.get"></a>

```go
func Get(index *f64) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.dimensions"></a>

```go
func Dimensions() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList</a>

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.stat">Stat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.metric"></a>

```go
func Metric() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference</a>

---

##### `Stat`<sup>Required</sup> <a name="Stat" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.stat"></a>

```go
func Stat() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.metricStat">MetricStat</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.returnData">ReturnData</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `MetricStat`<sup>Required</sup> <a name="MetricStat" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.metricStat"></a>

```go
func MetricStat() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference</a>

---

##### `ReturnData`<sup>Required</sup> <a name="ReturnData" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.returnData"></a>

```go
func ReturnData() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.property.metricDataQueries">MetricDataQueries</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricDataQueries`<sup>Required</sup> <a name="MetricDataQueries" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.property.metricDataQueries"></a>

```go
func MetricDataQueries() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.get"></a>

```go
func Get(index *f64) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.get"></a>

```go
func Get(index *f64) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.dimensions"></a>

```go
func Dimensions() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList</a>

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.stat">Stat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.metric"></a>

```go
func Metric() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference</a>

---

##### `Stat`<sup>Required</sup> <a name="Stat" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.stat"></a>

```go
func Stat() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.metricStat">MetricStat</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.returnData">ReturnData</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `MetricStat`<sup>Required</sup> <a name="MetricStat" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.metricStat"></a>

```go
func MetricStat() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference</a>

---

##### `ReturnData`<sup>Required</sup> <a name="ReturnData" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.returnData"></a>

```go
func ReturnData() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.property.metricDataQueries">MetricDataQueries</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricDataQueries`<sup>Required</sup> <a name="MetricDataQueries" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.property.metricDataQueries"></a>

```go
func MetricDataQueries() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.get"></a>

```go
func Get(index *f64) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.customizedCapacityMetricSpecification">CustomizedCapacityMetricSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.customizedLoadMetricSpecification">CustomizedLoadMetricSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.customizedScalingMetricSpecification">CustomizedScalingMetricSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.predefinedLoadMetricSpecification">PredefinedLoadMetricSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.predefinedMetricPairSpecification">PredefinedMetricPairSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.predefinedScalingMetricSpecification">PredefinedScalingMetricSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.targetValue">TargetValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomizedCapacityMetricSpecification`<sup>Required</sup> <a name="CustomizedCapacityMetricSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.customizedCapacityMetricSpecification"></a>

```go
func CustomizedCapacityMetricSpecification() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference</a>

---

##### `CustomizedLoadMetricSpecification`<sup>Required</sup> <a name="CustomizedLoadMetricSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.customizedLoadMetricSpecification"></a>

```go
func CustomizedLoadMetricSpecification() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference</a>

---

##### `CustomizedScalingMetricSpecification`<sup>Required</sup> <a name="CustomizedScalingMetricSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.customizedScalingMetricSpecification"></a>

```go
func CustomizedScalingMetricSpecification() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference</a>

---

##### `PredefinedLoadMetricSpecification`<sup>Required</sup> <a name="PredefinedLoadMetricSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.predefinedLoadMetricSpecification"></a>

```go
func PredefinedLoadMetricSpecification() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference</a>

---

##### `PredefinedMetricPairSpecification`<sup>Required</sup> <a name="PredefinedMetricPairSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.predefinedMetricPairSpecification"></a>

```go
func PredefinedMetricPairSpecification() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference</a>

---

##### `PredefinedScalingMetricSpecification`<sup>Required</sup> <a name="PredefinedScalingMetricSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.predefinedScalingMetricSpecification"></a>

```go
func PredefinedScalingMetricSpecification() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference</a>

---

##### `TargetValue`<sup>Required</sup> <a name="TargetValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.targetValue"></a>

```go
func TargetValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.property.predefinedMetricType">PredefinedMetricType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.property.resourceLabel">ResourceLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PredefinedMetricType`<sup>Required</sup> <a name="PredefinedMetricType" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.property.predefinedMetricType"></a>

```go
func PredefinedMetricType() *string
```

- *Type:* *string

---

##### `ResourceLabel`<sup>Required</sup> <a name="ResourceLabel" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.property.resourceLabel"></a>

```go
func ResourceLabel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.property.predefinedMetricType">PredefinedMetricType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.property.resourceLabel">ResourceLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PredefinedMetricType`<sup>Required</sup> <a name="PredefinedMetricType" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.property.predefinedMetricType"></a>

```go
func PredefinedMetricType() *string
```

- *Type:* *string

---

##### `ResourceLabel`<sup>Required</sup> <a name="ResourceLabel" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.property.resourceLabel"></a>

```go
func ResourceLabel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.property.predefinedMetricType">PredefinedMetricType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.property.resourceLabel">ResourceLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PredefinedMetricType`<sup>Required</sup> <a name="PredefinedMetricType" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.property.predefinedMetricType"></a>

```go
func PredefinedMetricType() *string
```

- *Type:* *string

---

##### `ResourceLabel`<sup>Required</sup> <a name="ResourceLabel" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.property.resourceLabel"></a>

```go
func ResourceLabel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.maxCapacityBreachBehavior">MaxCapacityBreachBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.maxCapacityBuffer">MaxCapacityBuffer</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.metricSpecifications">MetricSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.schedulingBufferTime">SchedulingBufferTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfiguration">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxCapacityBreachBehavior`<sup>Required</sup> <a name="MaxCapacityBreachBehavior" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.maxCapacityBreachBehavior"></a>

```go
func MaxCapacityBreachBehavior() *string
```

- *Type:* *string

---

##### `MaxCapacityBuffer`<sup>Required</sup> <a name="MaxCapacityBuffer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.maxCapacityBuffer"></a>

```go
func MaxCapacityBuffer() *f64
```

- *Type:* *f64

---

##### `MetricSpecifications`<sup>Required</sup> <a name="MetricSpecifications" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.metricSpecifications"></a>

```go
func MetricSpecifications() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList</a>

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `SchedulingBufferTime`<sup>Required</sup> <a name="SchedulingBufferTime" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.schedulingBufferTime"></a>

```go
func SchedulingBufferTime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingScalingPolicyPredictiveScalingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfiguration">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfiguration</a>

---


### DataAwsccAutoscalingScalingPolicyStepAdjustmentsList <a name="DataAwsccAutoscalingScalingPolicyStepAdjustmentsList" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyStepAdjustmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAutoscalingScalingPolicyStepAdjustmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.get"></a>

```go
func Get(index *f64) DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference <a name="DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.property.metricIntervalLowerBound">MetricIntervalLowerBound</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.property.metricIntervalUpperBound">MetricIntervalUpperBound</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.property.scalingAdjustment">ScalingAdjustment</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustments">DataAwsccAutoscalingScalingPolicyStepAdjustments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricIntervalLowerBound`<sup>Required</sup> <a name="MetricIntervalLowerBound" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.property.metricIntervalLowerBound"></a>

```go
func MetricIntervalLowerBound() *f64
```

- *Type:* *f64

---

##### `MetricIntervalUpperBound`<sup>Required</sup> <a name="MetricIntervalUpperBound" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.property.metricIntervalUpperBound"></a>

```go
func MetricIntervalUpperBound() *f64
```

- *Type:* *f64

---

##### `ScalingAdjustment`<sup>Required</sup> <a name="ScalingAdjustment" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.property.scalingAdjustment"></a>

```go
func ScalingAdjustment() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingScalingPolicyStepAdjustments
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustments">DataAwsccAutoscalingScalingPolicyStepAdjustments</a>

---


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.get"></a>

```go
func Get(index *f64) DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions</a>

---


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.get"></a>

```go
func Get(index *f64) DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.get"></a>

```go
func Get(index *f64) DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions</a>

---


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.dimensions"></a>

```go
func Dimensions() DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList</a>

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric</a>

---


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.period">Period</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.stat">Stat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.metric"></a>

```go
func Metric() DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference</a>

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.period"></a>

```go
func Period() *f64
```

- *Type:* *f64

---

##### `Stat`<sup>Required</sup> <a name="Stat" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.stat"></a>

```go
func Stat() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat</a>

---


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.metricStat">MetricStat</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.period">Period</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.returnData">ReturnData</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `MetricStat`<sup>Required</sup> <a name="MetricStat" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.metricStat"></a>

```go
func MetricStat() DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference</a>

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.period"></a>

```go
func Period() *f64
```

- *Type:* *f64

---

##### `ReturnData`<sup>Required</sup> <a name="ReturnData" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.returnData"></a>

```go
func ReturnData() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics</a>

---


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.metrics">Metrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.period">Period</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.statistic">Statistic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.dimensions"></a>

```go
func Dimensions() DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList</a>

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.metrics"></a>

```go
func Metrics() DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList</a>

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.period"></a>

```go
func Period() *f64
```

- *Type:* *f64

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.statistic"></a>

```go
func Statistic() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification</a>

---


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.property.customizedMetricSpecification">CustomizedMetricSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.property.disableScaleIn">DisableScaleIn</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.property.predefinedMetricSpecification">PredefinedMetricSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.property.targetValue">TargetValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfiguration">DataAwsccAutoscalingScalingPolicyTargetTrackingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomizedMetricSpecification`<sup>Required</sup> <a name="CustomizedMetricSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.property.customizedMetricSpecification"></a>

```go
func CustomizedMetricSpecification() DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference</a>

---

##### `DisableScaleIn`<sup>Required</sup> <a name="DisableScaleIn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.property.disableScaleIn"></a>

```go
func DisableScaleIn() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PredefinedMetricSpecification`<sup>Required</sup> <a name="PredefinedMetricSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.property.predefinedMetricSpecification"></a>

```go
func PredefinedMetricSpecification() DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference</a>

---

##### `TargetValue`<sup>Required</sup> <a name="TargetValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.property.targetValue"></a>

```go
func TargetValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingScalingPolicyTargetTrackingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfiguration">DataAwsccAutoscalingScalingPolicyTargetTrackingConfiguration</a>

---


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingscalingpolicy"

dataawsccautoscalingscalingpolicy.NewDataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.predefinedMetricType">PredefinedMetricType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.resourceLabel">ResourceLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PredefinedMetricType`<sup>Required</sup> <a name="PredefinedMetricType" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.predefinedMetricType"></a>

```go
func PredefinedMetricType() *string
```

- *Type:* *string

---

##### `ResourceLabel`<sup>Required</sup> <a name="ResourceLabel" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.resourceLabel"></a>

```go
func ResourceLabel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification</a>

---



