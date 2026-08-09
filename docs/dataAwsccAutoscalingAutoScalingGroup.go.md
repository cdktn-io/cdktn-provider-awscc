# `dataAwsccAutoscalingAutoScalingGroup` Submodule <a name="`dataAwsccAutoscalingAutoScalingGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAutoscalingAutoScalingGroup <a name="DataAwsccAutoscalingAutoScalingGroup" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/autoscaling_auto_scaling_group awscc_autoscaling_auto_scaling_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroup(scope Construct, id *string, config DataAwsccAutoscalingAutoScalingGroupConfig) DataAwsccAutoscalingAutoScalingGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig">DataAwsccAutoscalingAutoScalingGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig">DataAwsccAutoscalingAutoScalingGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAutoscalingAutoScalingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccAutoscalingAutoScalingGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccAutoscalingAutoScalingGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccAutoscalingAutoScalingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/autoscaling_auto_scaling_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAutoscalingAutoScalingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.autoScalingGroupArn">AutoScalingGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.autoScalingGroupName">AutoScalingGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.availabilityZoneDistribution">AvailabilityZoneDistribution</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference">DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.availabilityZoneIds">AvailabilityZoneIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.availabilityZoneImpairmentPolicy">AvailabilityZoneImpairmentPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference">DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.capacityRebalance">CapacityRebalance</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.capacityReservationSpecification">CapacityReservationSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference">DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.context">Context</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.cooldown">Cooldown</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.defaultInstanceWarmup">DefaultInstanceWarmup</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.deletionProtection">DeletionProtection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.desiredCapacity">DesiredCapacity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.desiredCapacityType">DesiredCapacityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.healthCheckGracePeriod">HealthCheckGracePeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.healthCheckType">HealthCheckType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.instanceLifecyclePolicy">InstanceLifecyclePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference">DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.instanceMaintenancePolicy">InstanceMaintenancePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference">DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.launchConfigurationName">LaunchConfigurationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.launchTemplate">LaunchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference">DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.lifecycleHookSpecificationList">LifecycleHookSpecificationList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList">DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.loadBalancerNames">LoadBalancerNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.maxInstanceLifetime">MaxInstanceLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.maxSize">MaxSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.metricsCollection">MetricsCollection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList">DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.minSize">MinSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.mixedInstancesPolicy">MixedInstancesPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.newInstancesProtectedFromScaleIn">NewInstancesProtectedFromScaleIn</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.notificationConfiguration">NotificationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference">DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.notificationConfigurations">NotificationConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList">DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.placementGroup">PlacementGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.serviceLinkedRoleArn">ServiceLinkedRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.skipZonalShiftValidation">SkipZonalShiftValidation</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList">DataAwsccAutoscalingAutoScalingGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.targetGroupArNs">TargetGroupArNs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.terminationPolicies">TerminationPolicies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.trafficSources">TrafficSources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList">DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.vpcZoneIdentifier">VpcZoneIdentifier</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AutoScalingGroupArn`<sup>Required</sup> <a name="AutoScalingGroupArn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.autoScalingGroupArn"></a>

```go
func AutoScalingGroupArn() *string
```

- *Type:* *string

---

##### `AutoScalingGroupName`<sup>Required</sup> <a name="AutoScalingGroupName" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.autoScalingGroupName"></a>

```go
func AutoScalingGroupName() *string
```

- *Type:* *string

---

##### `AvailabilityZoneDistribution`<sup>Required</sup> <a name="AvailabilityZoneDistribution" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.availabilityZoneDistribution"></a>

```go
func AvailabilityZoneDistribution() DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference">DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference</a>

---

##### `AvailabilityZoneIds`<sup>Required</sup> <a name="AvailabilityZoneIds" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.availabilityZoneIds"></a>

```go
func AvailabilityZoneIds() *[]*string
```

- *Type:* *[]*string

---

##### `AvailabilityZoneImpairmentPolicy`<sup>Required</sup> <a name="AvailabilityZoneImpairmentPolicy" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.availabilityZoneImpairmentPolicy"></a>

```go
func AvailabilityZoneImpairmentPolicy() DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference">DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference</a>

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.availabilityZones"></a>

```go
func AvailabilityZones() *[]*string
```

- *Type:* *[]*string

---

##### `CapacityRebalance`<sup>Required</sup> <a name="CapacityRebalance" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.capacityRebalance"></a>

```go
func CapacityRebalance() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `CapacityReservationSpecification`<sup>Required</sup> <a name="CapacityReservationSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.capacityReservationSpecification"></a>

```go
func CapacityReservationSpecification() DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference">DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference</a>

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.context"></a>

```go
func Context() *string
```

- *Type:* *string

---

##### `Cooldown`<sup>Required</sup> <a name="Cooldown" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.cooldown"></a>

```go
func Cooldown() *string
```

- *Type:* *string

---

##### `DefaultInstanceWarmup`<sup>Required</sup> <a name="DefaultInstanceWarmup" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.defaultInstanceWarmup"></a>

```go
func DefaultInstanceWarmup() *f64
```

- *Type:* *f64

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.deletionProtection"></a>

```go
func DeletionProtection() *string
```

- *Type:* *string

---

##### `DesiredCapacity`<sup>Required</sup> <a name="DesiredCapacity" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.desiredCapacity"></a>

```go
func DesiredCapacity() *string
```

- *Type:* *string

---

##### `DesiredCapacityType`<sup>Required</sup> <a name="DesiredCapacityType" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.desiredCapacityType"></a>

```go
func DesiredCapacityType() *string
```

- *Type:* *string

---

##### `HealthCheckGracePeriod`<sup>Required</sup> <a name="HealthCheckGracePeriod" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.healthCheckGracePeriod"></a>

```go
func HealthCheckGracePeriod() *f64
```

- *Type:* *f64

---

##### `HealthCheckType`<sup>Required</sup> <a name="HealthCheckType" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.healthCheckType"></a>

```go
func HealthCheckType() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `InstanceLifecyclePolicy`<sup>Required</sup> <a name="InstanceLifecyclePolicy" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.instanceLifecyclePolicy"></a>

```go
func InstanceLifecyclePolicy() DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference">DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference</a>

---

##### `InstanceMaintenancePolicy`<sup>Required</sup> <a name="InstanceMaintenancePolicy" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.instanceMaintenancePolicy"></a>

```go
func InstanceMaintenancePolicy() DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference">DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference</a>

---

##### `LaunchConfigurationName`<sup>Required</sup> <a name="LaunchConfigurationName" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.launchConfigurationName"></a>

```go
func LaunchConfigurationName() *string
```

- *Type:* *string

---

##### `LaunchTemplate`<sup>Required</sup> <a name="LaunchTemplate" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.launchTemplate"></a>

```go
func LaunchTemplate() DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference">DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference</a>

---

##### `LifecycleHookSpecificationList`<sup>Required</sup> <a name="LifecycleHookSpecificationList" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.lifecycleHookSpecificationList"></a>

```go
func LifecycleHookSpecificationList() DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList">DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList</a>

---

##### `LoadBalancerNames`<sup>Required</sup> <a name="LoadBalancerNames" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.loadBalancerNames"></a>

```go
func LoadBalancerNames() *[]*string
```

- *Type:* *[]*string

---

##### `MaxInstanceLifetime`<sup>Required</sup> <a name="MaxInstanceLifetime" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.maxInstanceLifetime"></a>

```go
func MaxInstanceLifetime() *f64
```

- *Type:* *f64

---

##### `MaxSize`<sup>Required</sup> <a name="MaxSize" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.maxSize"></a>

```go
func MaxSize() *string
```

- *Type:* *string

---

##### `MetricsCollection`<sup>Required</sup> <a name="MetricsCollection" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.metricsCollection"></a>

```go
func MetricsCollection() DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList">DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList</a>

---

##### `MinSize`<sup>Required</sup> <a name="MinSize" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.minSize"></a>

```go
func MinSize() *string
```

- *Type:* *string

---

##### `MixedInstancesPolicy`<sup>Required</sup> <a name="MixedInstancesPolicy" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.mixedInstancesPolicy"></a>

```go
func MixedInstancesPolicy() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference</a>

---

##### `NewInstancesProtectedFromScaleIn`<sup>Required</sup> <a name="NewInstancesProtectedFromScaleIn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.newInstancesProtectedFromScaleIn"></a>

```go
func NewInstancesProtectedFromScaleIn() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `NotificationConfiguration`<sup>Required</sup> <a name="NotificationConfiguration" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.notificationConfiguration"></a>

```go
func NotificationConfiguration() DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference">DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference</a>

---

##### `NotificationConfigurations`<sup>Required</sup> <a name="NotificationConfigurations" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.notificationConfigurations"></a>

```go
func NotificationConfigurations() DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList">DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList</a>

---

##### `PlacementGroup`<sup>Required</sup> <a name="PlacementGroup" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.placementGroup"></a>

```go
func PlacementGroup() *string
```

- *Type:* *string

---

##### `ServiceLinkedRoleArn`<sup>Required</sup> <a name="ServiceLinkedRoleArn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.serviceLinkedRoleArn"></a>

```go
func ServiceLinkedRoleArn() *string
```

- *Type:* *string

---

##### `SkipZonalShiftValidation`<sup>Required</sup> <a name="SkipZonalShiftValidation" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.skipZonalShiftValidation"></a>

```go
func SkipZonalShiftValidation() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.tags"></a>

```go
func Tags() DataAwsccAutoscalingAutoScalingGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList">DataAwsccAutoscalingAutoScalingGroupTagsList</a>

---

##### `TargetGroupArNs`<sup>Required</sup> <a name="TargetGroupArNs" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.targetGroupArNs"></a>

```go
func TargetGroupArNs() *[]*string
```

- *Type:* *[]*string

---

##### `TerminationPolicies`<sup>Required</sup> <a name="TerminationPolicies" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.terminationPolicies"></a>

```go
func TerminationPolicies() *[]*string
```

- *Type:* *[]*string

---

##### `TrafficSources`<sup>Required</sup> <a name="TrafficSources" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.trafficSources"></a>

```go
func TrafficSources() DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList">DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList</a>

---

##### `VpcZoneIdentifier`<sup>Required</sup> <a name="VpcZoneIdentifier" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.vpcZoneIdentifier"></a>

```go
func VpcZoneIdentifier() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistribution <a name="DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistribution" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistribution.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistribution {

}
```


### DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicy <a name="DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicy" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicy {

}
```


### DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecification <a name="DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecification {

}
```


### DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTarget <a name="DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTarget" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTarget {

}
```


### DataAwsccAutoscalingAutoScalingGroupConfig <a name="DataAwsccAutoscalingAutoScalingGroupConfig" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/autoscaling_auto_scaling_group#id DataAwsccAutoscalingAutoScalingGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicy <a name="DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicy" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicy {

}
```


### DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggers <a name="DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggers {

}
```


### DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicy <a name="DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicy" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicy {

}
```


### DataAwsccAutoscalingAutoScalingGroupLaunchTemplate <a name="DataAwsccAutoscalingAutoScalingGroupLaunchTemplate" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplate {

}
```


### DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStruct <a name="DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStruct" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStruct {

}
```


### DataAwsccAutoscalingAutoScalingGroupMetricsCollection <a name="DataAwsccAutoscalingAutoScalingGroupMetricsCollection" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollection {

}
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicy <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicy" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicy {

}
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistribution <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistribution" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistribution.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistribution {

}
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplate <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplate" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplate {

}
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification {

}
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverrides <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverrides" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverrides.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverrides {

}
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirements <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirements" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirements.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirements {

}
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCount <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCount" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCount.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCount {

}
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiB <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiB" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiB"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiB.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiB {

}
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbps <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbps" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbps.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbps {

}
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactors <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactors" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactors {

}
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpu <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpu" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpu"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpu.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpu {

}
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences {

}
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpu <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpu" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpu"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpu.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpu {

}
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiB <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiB" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiB"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiB.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiB {

}
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbps <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbps" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbps.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbps {

}
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCount <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCount" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCount.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCount {

}
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGb <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGb" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGb.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGb {

}
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCount <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCount" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCount.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCount {

}
```


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecification <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecification {

}
```


### DataAwsccAutoscalingAutoScalingGroupNotificationConfiguration <a name="DataAwsccAutoscalingAutoScalingGroupNotificationConfiguration" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfiguration {

}
```


### DataAwsccAutoscalingAutoScalingGroupNotificationConfigurations <a name="DataAwsccAutoscalingAutoScalingGroupNotificationConfigurations" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurations {

}
```


### DataAwsccAutoscalingAutoScalingGroupTags <a name="DataAwsccAutoscalingAutoScalingGroupTags" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupTags {

}
```


### DataAwsccAutoscalingAutoScalingGroupTrafficSources <a name="DataAwsccAutoscalingAutoScalingGroupTrafficSources" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

&dataawsccautoscalingautoscalinggroup.DataAwsccAutoscalingAutoScalingGroupTrafficSources {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.property.capacityDistributionStrategy">CapacityDistributionStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistribution">DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistribution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityDistributionStrategy`<sup>Required</sup> <a name="CapacityDistributionStrategy" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.property.capacityDistributionStrategy"></a>

```go
func CapacityDistributionStrategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistribution
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistribution">DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistribution</a>

---


### DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.property.impairedZoneHealthCheckBehavior">ImpairedZoneHealthCheckBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.property.zonalShiftEnabled">ZonalShiftEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicy">DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImpairedZoneHealthCheckBehavior`<sup>Required</sup> <a name="ImpairedZoneHealthCheckBehavior" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.property.impairedZoneHealthCheckBehavior"></a>

```go
func ImpairedZoneHealthCheckBehavior() *string
```

- *Type:* *string

---

##### `ZonalShiftEnabled`<sup>Required</sup> <a name="ZonalShiftEnabled" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.property.zonalShiftEnabled"></a>

```go
func ZonalShiftEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicy">DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicy</a>

---


### DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIds">CapacityReservationIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArns">CapacityReservationResourceGroupArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTarget">DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityReservationIds`<sup>Required</sup> <a name="CapacityReservationIds" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIds"></a>

```go
func CapacityReservationIds() *[]*string
```

- *Type:* *[]*string

---

##### `CapacityReservationResourceGroupArns`<sup>Required</sup> <a name="CapacityReservationResourceGroupArns" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArns"></a>

```go
func CapacityReservationResourceGroupArns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTarget">DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTarget</a>

---


### DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.property.capacityReservationPreference">CapacityReservationPreference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.property.capacityReservationTarget">CapacityReservationTarget</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference">DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecification">DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityReservationPreference`<sup>Required</sup> <a name="CapacityReservationPreference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.property.capacityReservationPreference"></a>

```go
func CapacityReservationPreference() *string
```

- *Type:* *string

---

##### `CapacityReservationTarget`<sup>Required</sup> <a name="CapacityReservationTarget" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.property.capacityReservationTarget"></a>

```go
func CapacityReservationTarget() DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference">DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecification">DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecification</a>

---


### DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.property.retentionTriggers">RetentionTriggers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference">DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicy">DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RetentionTriggers`<sup>Required</sup> <a name="RetentionTriggers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.property.retentionTriggers"></a>

```go
func RetentionTriggers() DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference">DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicy">DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicy</a>

---


### DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.property.terminateHookAbandon">TerminateHookAbandon</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggers">DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TerminateHookAbandon`<sup>Required</sup> <a name="TerminateHookAbandon" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.property.terminateHookAbandon"></a>

```go
func TerminateHookAbandon() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggers
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggers">DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggers</a>

---


### DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.property.maxHealthyPercentage">MaxHealthyPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.property.minHealthyPercentage">MinHealthyPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicy">DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxHealthyPercentage`<sup>Required</sup> <a name="MaxHealthyPercentage" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.property.maxHealthyPercentage"></a>

```go
func MaxHealthyPercentage() *f64
```

- *Type:* *f64

---

##### `MinHealthyPercentage`<sup>Required</sup> <a name="MinHealthyPercentage" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.property.minHealthyPercentage"></a>

```go
func MinHealthyPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicy">DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicy</a>

---


### DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.property.launchTemplateId">LaunchTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.property.launchTemplateName">LaunchTemplateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplate">DataAwsccAutoscalingAutoScalingGroupLaunchTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LaunchTemplateId`<sup>Required</sup> <a name="LaunchTemplateId" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.property.launchTemplateId"></a>

```go
func LaunchTemplateId() *string
```

- *Type:* *string

---

##### `LaunchTemplateName`<sup>Required</sup> <a name="LaunchTemplateName" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.property.launchTemplateName"></a>

```go
func LaunchTemplateName() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupLaunchTemplate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLaunchTemplate">DataAwsccAutoscalingAutoScalingGroupLaunchTemplate</a>

---


### DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList <a name="DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.get"></a>

```go
func Get(index *f64) DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.defaultResult">DefaultResult</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.heartbeatTimeout">HeartbeatTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.lifecycleHookName">LifecycleHookName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.lifecycleTransition">LifecycleTransition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.notificationMetadata">NotificationMetadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.notificationTargetArn">NotificationTargetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStruct">DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultResult`<sup>Required</sup> <a name="DefaultResult" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.defaultResult"></a>

```go
func DefaultResult() *string
```

- *Type:* *string

---

##### `HeartbeatTimeout`<sup>Required</sup> <a name="HeartbeatTimeout" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.heartbeatTimeout"></a>

```go
func HeartbeatTimeout() *f64
```

- *Type:* *f64

---

##### `LifecycleHookName`<sup>Required</sup> <a name="LifecycleHookName" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.lifecycleHookName"></a>

```go
func LifecycleHookName() *string
```

- *Type:* *string

---

##### `LifecycleTransition`<sup>Required</sup> <a name="LifecycleTransition" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.lifecycleTransition"></a>

```go
func LifecycleTransition() *string
```

- *Type:* *string

---

##### `NotificationMetadata`<sup>Required</sup> <a name="NotificationMetadata" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.notificationMetadata"></a>

```go
func NotificationMetadata() *string
```

- *Type:* *string

---

##### `NotificationTargetArn`<sup>Required</sup> <a name="NotificationTargetArn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.notificationTargetArn"></a>

```go
func NotificationTargetArn() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStruct">DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStruct</a>

---


### DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList <a name="DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupMetricsCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.get"></a>

```go
func Get(index *f64) DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.property.granularity">Granularity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.property.metrics">Metrics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollection">DataAwsccAutoscalingAutoScalingGroupMetricsCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Granularity`<sup>Required</sup> <a name="Granularity" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.property.granularity"></a>

```go
func Granularity() *string
```

- *Type:* *string

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.property.metrics"></a>

```go
func Metrics() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupMetricsCollection
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMetricsCollection">DataAwsccAutoscalingAutoScalingGroupMetricsCollection</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandAllocationStrategy">OnDemandAllocationStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandBaseCapacity">OnDemandBaseCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandPercentageAboveBaseCapacity">OnDemandPercentageAboveBaseCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotAllocationStrategy">SpotAllocationStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotInstancePools">SpotInstancePools</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotMaxPrice">SpotMaxPrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistribution">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistribution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OnDemandAllocationStrategy`<sup>Required</sup> <a name="OnDemandAllocationStrategy" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandAllocationStrategy"></a>

```go
func OnDemandAllocationStrategy() *string
```

- *Type:* *string

---

##### `OnDemandBaseCapacity`<sup>Required</sup> <a name="OnDemandBaseCapacity" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandBaseCapacity"></a>

```go
func OnDemandBaseCapacity() *f64
```

- *Type:* *f64

---

##### `OnDemandPercentageAboveBaseCapacity`<sup>Required</sup> <a name="OnDemandPercentageAboveBaseCapacity" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandPercentageAboveBaseCapacity"></a>

```go
func OnDemandPercentageAboveBaseCapacity() *f64
```

- *Type:* *f64

---

##### `SpotAllocationStrategy`<sup>Required</sup> <a name="SpotAllocationStrategy" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotAllocationStrategy"></a>

```go
func SpotAllocationStrategy() *string
```

- *Type:* *string

---

##### `SpotInstancePools`<sup>Required</sup> <a name="SpotInstancePools" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotInstancePools"></a>

```go
func SpotInstancePools() *f64
```

- *Type:* *f64

---

##### `SpotMaxPrice`<sup>Required</sup> <a name="SpotMaxPrice" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotMaxPrice"></a>

```go
func SpotMaxPrice() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistribution
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistribution">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistribution</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.launchTemplateId">LaunchTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.launchTemplateName">LaunchTemplateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LaunchTemplateId`<sup>Required</sup> <a name="LaunchTemplateId" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.launchTemplateId"></a>

```go
func LaunchTemplateId() *string
```

- *Type:* *string

---

##### `LaunchTemplateName`<sup>Required</sup> <a name="LaunchTemplateName" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.launchTemplateName"></a>

```go
func LaunchTemplateName() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.launchTemplateSpecification">LaunchTemplateSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.overrides">Overrides</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplate">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LaunchTemplateSpecification`<sup>Required</sup> <a name="LaunchTemplateSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.launchTemplateSpecification"></a>

```go
func LaunchTemplateSpecification() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference</a>

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.overrides"></a>

```go
func Overrides() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplate">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplate</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCount">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCount
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCount">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCount</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiB">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiB</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiB
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiB">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiB</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbps">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbps
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbps">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.references">References</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpu">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpu</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `References`<sup>Required</sup> <a name="References" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.references"></a>

```go
func References() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpu
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpu">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpu</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.get"></a>

```go
func Get(index *f64) DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.instanceFamily">InstanceFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceFamily`<sup>Required</sup> <a name="InstanceFamily" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.instanceFamily"></a>

```go
func InstanceFamily() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.cpu">Cpu</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactors">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.cpu"></a>

```go
func Cpu() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactors">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactors</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpu">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpu</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpu
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpu">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpu</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiB">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiB</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiB
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiB">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiB</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbps">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbps
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbps">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbps</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCount">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCount
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCount">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCount</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.acceleratorManufacturers">AcceleratorManufacturers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.acceleratorNames">AcceleratorNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMiB">AcceleratorTotalMemoryMiB</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.acceleratorTypes">AcceleratorTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.allowedInstanceTypes">AllowedInstanceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.bareMetal">BareMetal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps">BaselineEbsBandwidthMbps</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.baselinePerformanceFactors">BaselinePerformanceFactors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.burstablePerformance">BurstablePerformance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.cpuManufacturers">CpuManufacturers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.excludedInstanceTypes">ExcludedInstanceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.instanceGenerations">InstanceGenerations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.localStorage">LocalStorage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.localStorageTypes">LocalStorageTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.maxSpotPriceAsPercentageOfOptimalOnDemandPrice">MaxSpotPriceAsPercentageOfOptimalOnDemandPrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.memoryGiBPerVCpu">MemoryGiBPerVCpu</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.memoryMiB">MemoryMiB</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.networkBandwidthGbps">NetworkBandwidthGbps</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.networkInterfaceCount">NetworkInterfaceCount</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice">OnDemandMaxPricePercentageOverLowestPrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.requireHibernateSupport">RequireHibernateSupport</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice">SpotMaxPricePercentageOverLowestPrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.totalLocalStorageGb">TotalLocalStorageGb</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.vCpuCount">VCpuCount</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirements">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.acceleratorCount"></a>

```go
func AcceleratorCount() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference</a>

---

##### `AcceleratorManufacturers`<sup>Required</sup> <a name="AcceleratorManufacturers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.acceleratorManufacturers"></a>

```go
func AcceleratorManufacturers() *[]*string
```

- *Type:* *[]*string

---

##### `AcceleratorNames`<sup>Required</sup> <a name="AcceleratorNames" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.acceleratorNames"></a>

```go
func AcceleratorNames() *[]*string
```

- *Type:* *[]*string

---

##### `AcceleratorTotalMemoryMiB`<sup>Required</sup> <a name="AcceleratorTotalMemoryMiB" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMiB"></a>

```go
func AcceleratorTotalMemoryMiB() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference</a>

---

##### `AcceleratorTypes`<sup>Required</sup> <a name="AcceleratorTypes" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.acceleratorTypes"></a>

```go
func AcceleratorTypes() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedInstanceTypes`<sup>Required</sup> <a name="AllowedInstanceTypes" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.allowedInstanceTypes"></a>

```go
func AllowedInstanceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `BareMetal`<sup>Required</sup> <a name="BareMetal" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.bareMetal"></a>

```go
func BareMetal() *string
```

- *Type:* *string

---

##### `BaselineEbsBandwidthMbps`<sup>Required</sup> <a name="BaselineEbsBandwidthMbps" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps"></a>

```go
func BaselineEbsBandwidthMbps() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a>

---

##### `BaselinePerformanceFactors`<sup>Required</sup> <a name="BaselinePerformanceFactors" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.baselinePerformanceFactors"></a>

```go
func BaselinePerformanceFactors() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference</a>

---

##### `BurstablePerformance`<sup>Required</sup> <a name="BurstablePerformance" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.burstablePerformance"></a>

```go
func BurstablePerformance() *string
```

- *Type:* *string

---

##### `CpuManufacturers`<sup>Required</sup> <a name="CpuManufacturers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.cpuManufacturers"></a>

```go
func CpuManufacturers() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedInstanceTypes`<sup>Required</sup> <a name="ExcludedInstanceTypes" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.excludedInstanceTypes"></a>

```go
func ExcludedInstanceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InstanceGenerations`<sup>Required</sup> <a name="InstanceGenerations" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.instanceGenerations"></a>

```go
func InstanceGenerations() *[]*string
```

- *Type:* *[]*string

---

##### `LocalStorage`<sup>Required</sup> <a name="LocalStorage" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.localStorage"></a>

```go
func LocalStorage() *string
```

- *Type:* *string

---

##### `LocalStorageTypes`<sup>Required</sup> <a name="LocalStorageTypes" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.localStorageTypes"></a>

```go
func LocalStorageTypes() *[]*string
```

- *Type:* *[]*string

---

##### `MaxSpotPriceAsPercentageOfOptimalOnDemandPrice`<sup>Required</sup> <a name="MaxSpotPriceAsPercentageOfOptimalOnDemandPrice" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.maxSpotPriceAsPercentageOfOptimalOnDemandPrice"></a>

```go
func MaxSpotPriceAsPercentageOfOptimalOnDemandPrice() *f64
```

- *Type:* *f64

---

##### `MemoryGiBPerVCpu`<sup>Required</sup> <a name="MemoryGiBPerVCpu" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.memoryGiBPerVCpu"></a>

```go
func MemoryGiBPerVCpu() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference</a>

---

##### `MemoryMiB`<sup>Required</sup> <a name="MemoryMiB" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.memoryMiB"></a>

```go
func MemoryMiB() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference</a>

---

##### `NetworkBandwidthGbps`<sup>Required</sup> <a name="NetworkBandwidthGbps" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.networkBandwidthGbps"></a>

```go
func NetworkBandwidthGbps() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference</a>

---

##### `NetworkInterfaceCount`<sup>Required</sup> <a name="NetworkInterfaceCount" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.networkInterfaceCount"></a>

```go
func NetworkInterfaceCount() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference</a>

---

##### `OnDemandMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="OnDemandMaxPricePercentageOverLowestPrice" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```go
func OnDemandMaxPricePercentageOverLowestPrice() *f64
```

- *Type:* *f64

---

##### `RequireHibernateSupport`<sup>Required</sup> <a name="RequireHibernateSupport" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.requireHibernateSupport"></a>

```go
func RequireHibernateSupport() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SpotMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="SpotMaxPricePercentageOverLowestPrice" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice"></a>

```go
func SpotMaxPricePercentageOverLowestPrice() *f64
```

- *Type:* *f64

---

##### `TotalLocalStorageGb`<sup>Required</sup> <a name="TotalLocalStorageGb" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.totalLocalStorageGb"></a>

```go
func TotalLocalStorageGb() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference</a>

---

##### `VCpuCount`<sup>Required</sup> <a name="VCpuCount" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.vCpuCount"></a>

```go
func VCpuCount() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirements
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirements">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirements</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGb">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGb
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGb">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGb</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCount">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCount
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCount">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCount</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.property.launchTemplateId">LaunchTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.property.launchTemplateName">LaunchTemplateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecification">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LaunchTemplateId`<sup>Required</sup> <a name="LaunchTemplateId" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.property.launchTemplateId"></a>

```go
func LaunchTemplateId() *string
```

- *Type:* *string

---

##### `LaunchTemplateName`<sup>Required</sup> <a name="LaunchTemplateName" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.property.launchTemplateName"></a>

```go
func LaunchTemplateName() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecification">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecification</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.get"></a>

```go
func Get(index *f64) DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.instanceRequirements">InstanceRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.launchTemplateSpecification">LaunchTemplateSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.weightedCapacity">WeightedCapacity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverrides">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `InstanceRequirements`<sup>Required</sup> <a name="InstanceRequirements" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.instanceRequirements"></a>

```go
func InstanceRequirements() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference</a>

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `LaunchTemplateSpecification`<sup>Required</sup> <a name="LaunchTemplateSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.launchTemplateSpecification"></a>

```go
func LaunchTemplateSpecification() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference</a>

---

##### `WeightedCapacity`<sup>Required</sup> <a name="WeightedCapacity" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.weightedCapacity"></a>

```go
func WeightedCapacity() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverrides
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverrides">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverrides</a>

---


### DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.property.instancesDistribution">InstancesDistribution</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.property.launchTemplate">LaunchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicy">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstancesDistribution`<sup>Required</sup> <a name="InstancesDistribution" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.property.instancesDistribution"></a>

```go
func InstancesDistribution() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference</a>

---

##### `LaunchTemplate`<sup>Required</sup> <a name="LaunchTemplate" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.property.launchTemplate"></a>

```go
func LaunchTemplate() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicy">DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicy</a>

---


### DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.property.notificationTypes">NotificationTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.property.topicArn">TopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfiguration">DataAwsccAutoscalingAutoScalingGroupNotificationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotificationTypes`<sup>Required</sup> <a name="NotificationTypes" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.property.notificationTypes"></a>

```go
func NotificationTypes() *[]*string
```

- *Type:* *[]*string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.property.topicArn"></a>

```go
func TopicArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupNotificationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfiguration">DataAwsccAutoscalingAutoScalingGroupNotificationConfiguration</a>

---


### DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList <a name="DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.get"></a>

```go
func Get(index *f64) DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.property.notificationTypes">NotificationTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.property.topicArn">TopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurations">DataAwsccAutoscalingAutoScalingGroupNotificationConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotificationTypes`<sup>Required</sup> <a name="NotificationTypes" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.property.notificationTypes"></a>

```go
func NotificationTypes() *[]*string
```

- *Type:* *[]*string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.property.topicArn"></a>

```go
func TopicArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupNotificationConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupNotificationConfigurations">DataAwsccAutoscalingAutoScalingGroupNotificationConfigurations</a>

---


### DataAwsccAutoscalingAutoScalingGroupTagsList <a name="DataAwsccAutoscalingAutoScalingGroupTagsList" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAutoscalingAutoScalingGroupTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.get"></a>

```go
func Get(index *f64) DataAwsccAutoscalingAutoScalingGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAutoscalingAutoScalingGroupTagsOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAutoscalingAutoScalingGroupTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.property.propagateAtLaunch">PropagateAtLaunch</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTags">DataAwsccAutoscalingAutoScalingGroupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `PropagateAtLaunch`<sup>Required</sup> <a name="PropagateAtLaunch" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.property.propagateAtLaunch"></a>

```go
func PropagateAtLaunch() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTags">DataAwsccAutoscalingAutoScalingGroupTags</a>

---


### DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList <a name="DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupTrafficSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.get"></a>

```go
func Get(index *f64) DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference <a name="DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccautoscalingautoscalinggroup"

dataawsccautoscalingautoscalinggroup.NewDataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSources">DataAwsccAutoscalingAutoScalingGroupTrafficSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAutoscalingAutoScalingGroupTrafficSources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingAutoScalingGroup.DataAwsccAutoscalingAutoScalingGroupTrafficSources">DataAwsccAutoscalingAutoScalingGroupTrafficSources</a>

---



