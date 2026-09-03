# `dataAwsccEcsTaskDefinition` Submodule <a name="`dataAwsccEcsTaskDefinition` Submodule" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEcsTaskDefinition <a name="DataAwsccEcsTaskDefinition" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ecs_task_definition awscc_ecs_task_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinition(scope Construct, id *string, config DataAwsccEcsTaskDefinitionConfig) DataAwsccEcsTaskDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig">DataAwsccEcsTaskDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig">DataAwsccEcsTaskDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEcsTaskDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.DataAwsccEcsTaskDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.DataAwsccEcsTaskDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.DataAwsccEcsTaskDefinition_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.DataAwsccEcsTaskDefinition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEcsTaskDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEcsTaskDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEcsTaskDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ecs_task_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEcsTaskDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.containerDefinitions">ContainerDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList">DataAwsccEcsTaskDefinitionContainerDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.cpu">Cpu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.enableFaultInjection">EnableFaultInjection</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.ephemeralStorage">EphemeralStorage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference">DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.family">Family</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.inferenceAccelerators">InferenceAccelerators</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList">DataAwsccEcsTaskDefinitionInferenceAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.ipcMode">IpcMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.memory">Memory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.networkMode">NetworkMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.pidMode">PidMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.placementConstraints">PlacementConstraints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList">DataAwsccEcsTaskDefinitionPlacementConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.proxyConfiguration">ProxyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference">DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.requiresCompatibilities">RequiresCompatibilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.runtimePlatform">RuntimePlatform</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference">DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList">DataAwsccEcsTaskDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.taskDefinitionArn">TaskDefinitionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.taskRoleArn">TaskRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.volumes">Volumes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList">DataAwsccEcsTaskDefinitionVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ContainerDefinitions`<sup>Required</sup> <a name="ContainerDefinitions" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.containerDefinitions"></a>

```go
func ContainerDefinitions() DataAwsccEcsTaskDefinitionContainerDefinitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList">DataAwsccEcsTaskDefinitionContainerDefinitionsList</a>

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.cpu"></a>

```go
func Cpu() *string
```

- *Type:* *string

---

##### `EnableFaultInjection`<sup>Required</sup> <a name="EnableFaultInjection" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.enableFaultInjection"></a>

```go
func EnableFaultInjection() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EphemeralStorage`<sup>Required</sup> <a name="EphemeralStorage" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.ephemeralStorage"></a>

```go
func EphemeralStorage() DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference">DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference</a>

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.executionRoleArn"></a>

```go
func ExecutionRoleArn() *string
```

- *Type:* *string

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.family"></a>

```go
func Family() *string
```

- *Type:* *string

---

##### `InferenceAccelerators`<sup>Required</sup> <a name="InferenceAccelerators" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.inferenceAccelerators"></a>

```go
func InferenceAccelerators() DataAwsccEcsTaskDefinitionInferenceAcceleratorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList">DataAwsccEcsTaskDefinitionInferenceAcceleratorsList</a>

---

##### `IpcMode`<sup>Required</sup> <a name="IpcMode" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.ipcMode"></a>

```go
func IpcMode() *string
```

- *Type:* *string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.memory"></a>

```go
func Memory() *string
```

- *Type:* *string

---

##### `NetworkMode`<sup>Required</sup> <a name="NetworkMode" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.networkMode"></a>

```go
func NetworkMode() *string
```

- *Type:* *string

---

##### `PidMode`<sup>Required</sup> <a name="PidMode" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.pidMode"></a>

```go
func PidMode() *string
```

- *Type:* *string

---

##### `PlacementConstraints`<sup>Required</sup> <a name="PlacementConstraints" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.placementConstraints"></a>

```go
func PlacementConstraints() DataAwsccEcsTaskDefinitionPlacementConstraintsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList">DataAwsccEcsTaskDefinitionPlacementConstraintsList</a>

---

##### `ProxyConfiguration`<sup>Required</sup> <a name="ProxyConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.proxyConfiguration"></a>

```go
func ProxyConfiguration() DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference">DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference</a>

---

##### `RequiresCompatibilities`<sup>Required</sup> <a name="RequiresCompatibilities" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.requiresCompatibilities"></a>

```go
func RequiresCompatibilities() *[]*string
```

- *Type:* *[]*string

---

##### `RuntimePlatform`<sup>Required</sup> <a name="RuntimePlatform" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.runtimePlatform"></a>

```go
func RuntimePlatform() DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference">DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.tags"></a>

```go
func Tags() DataAwsccEcsTaskDefinitionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList">DataAwsccEcsTaskDefinitionTagsList</a>

---

##### `TaskDefinitionArn`<sup>Required</sup> <a name="TaskDefinitionArn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.taskDefinitionArn"></a>

```go
func TaskDefinitionArn() *string
```

- *Type:* *string

---

##### `TaskRoleArn`<sup>Required</sup> <a name="TaskRoleArn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.taskRoleArn"></a>

```go
func TaskRoleArn() *string
```

- *Type:* *string

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.volumes"></a>

```go
func Volumes() DataAwsccEcsTaskDefinitionVolumesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList">DataAwsccEcsTaskDefinitionVolumesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEcsTaskDefinitionConfig <a name="DataAwsccEcsTaskDefinitionConfig" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ecs_task_definition#id DataAwsccEcsTaskDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEcsTaskDefinitionContainerDefinitions <a name="DataAwsccEcsTaskDefinitionContainerDefinitions" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionContainerDefinitions {

}
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOn <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOn {

}
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironment <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironment" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironment {

}
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFiles <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFiles" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFiles.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFiles {

}
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHosts <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHosts" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHosts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHosts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHosts {

}
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfiguration <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfiguration {

}
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheck <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheck" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheck.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheck {

}
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParameters <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParameters" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParameters {

}
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities {

}
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevices <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevices" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevices.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevices {

}
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs {

}
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfiguration <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfiguration {

}
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions {

}
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsMountPoints <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsMountPoints" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPoints.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPoints {

}
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappings <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappings" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappings {

}
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentials <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentials" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentials.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentials {

}
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirements <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirements" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirements.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirements {

}
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicy <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicy" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicy {

}
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsSecrets <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsSecrets" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecrets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecrets {

}
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControls <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControls" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControls.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControls {

}
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsUlimits <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsUlimits" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimits.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimits {

}
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFrom <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFrom" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFrom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFrom.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFrom {

}
```


### DataAwsccEcsTaskDefinitionEphemeralStorage <a name="DataAwsccEcsTaskDefinitionEphemeralStorage" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionEphemeralStorage {

}
```


### DataAwsccEcsTaskDefinitionInferenceAccelerators <a name="DataAwsccEcsTaskDefinitionInferenceAccelerators" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAccelerators.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionInferenceAccelerators {

}
```


### DataAwsccEcsTaskDefinitionPlacementConstraints <a name="DataAwsccEcsTaskDefinitionPlacementConstraints" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraints.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionPlacementConstraints {

}
```


### DataAwsccEcsTaskDefinitionProxyConfiguration <a name="DataAwsccEcsTaskDefinitionProxyConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionProxyConfiguration {

}
```


### DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationProperties <a name="DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationProperties" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationProperties {

}
```


### DataAwsccEcsTaskDefinitionRuntimePlatform <a name="DataAwsccEcsTaskDefinitionRuntimePlatform" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatform"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatform.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionRuntimePlatform {

}
```


### DataAwsccEcsTaskDefinitionTags <a name="DataAwsccEcsTaskDefinitionTags" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionTags {

}
```


### DataAwsccEcsTaskDefinitionVolumes <a name="DataAwsccEcsTaskDefinitionVolumes" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionVolumes {

}
```


### DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfiguration <a name="DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfiguration {

}
```


### DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfiguration <a name="DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfiguration {

}
```


### DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig <a name="DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig {

}
```


### DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfiguration <a name="DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfiguration {

}
```


### DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfig <a name="DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfig {

}
```


### DataAwsccEcsTaskDefinitionVolumesHost <a name="DataAwsccEcsTaskDefinitionVolumesHost" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHost.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionVolumesHost {

}
```


### DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfiguration <a name="DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

&dataawsccecstaskdefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfiguration {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.get"></a>

```go
func Get(index *f64) DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.containerName">ContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOn">DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.containerName"></a>

```go
func ContainerName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOn
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOn">DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOn</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.get"></a>

```go
func Get(index *f64) DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFiles">DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFiles
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFiles">DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFiles</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.get"></a>

```go
func Get(index *f64) DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironment">DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironment
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironment">DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironment</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.get"></a>

```go
func Get(index *f64) DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHosts">DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHosts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHosts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHosts">DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHosts</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.options">Options</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfiguration">DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.options"></a>

```go
func Options() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfiguration">DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfiguration</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.interval">Interval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.retries">Retries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.startPeriod">StartPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheck">DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.interval"></a>

```go
func Interval() *f64
```

- *Type:* *f64

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.retries"></a>

```go
func Retries() *f64
```

- *Type:* *f64

---

##### `StartPeriod`<sup>Required</sup> <a name="StartPeriod" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.startPeriod"></a>

```go
func StartPeriod() *f64
```

- *Type:* *f64

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheck
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheck">DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheck</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.add">Add</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.drop">Drop</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Add`<sup>Required</sup> <a name="Add" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.add"></a>

```go
func Add() *[]*string
```

- *Type:* *[]*string

---

##### `Drop`<sup>Required</sup> <a name="Drop" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.drop"></a>

```go
func Drop() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.get"></a>

```go
func Get(index *f64) DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.containerPath">ContainerPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.hostPath">HostPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.permissions">Permissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevices">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerPath`<sup>Required</sup> <a name="ContainerPath" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.containerPath"></a>

```go
func ContainerPath() *string
```

- *Type:* *string

---

##### `HostPath`<sup>Required</sup> <a name="HostPath" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.hostPath"></a>

```go
func HostPath() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.permissions"></a>

```go
func Permissions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevices
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevices">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevices</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.capabilities">Capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.devices">Devices</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.initProcessEnabled">InitProcessEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.maxSwap">MaxSwap</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.sharedMemorySize">SharedMemorySize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.swappiness">Swappiness</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.tmpfs">Tmpfs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParameters">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.capabilities"></a>

```go
func Capabilities() DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference</a>

---

##### `Devices`<sup>Required</sup> <a name="Devices" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.devices"></a>

```go
func Devices() DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList</a>

---

##### `InitProcessEnabled`<sup>Required</sup> <a name="InitProcessEnabled" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.initProcessEnabled"></a>

```go
func InitProcessEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MaxSwap`<sup>Required</sup> <a name="MaxSwap" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.maxSwap"></a>

```go
func MaxSwap() *f64
```

- *Type:* *f64

---

##### `SharedMemorySize`<sup>Required</sup> <a name="SharedMemorySize" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.sharedMemorySize"></a>

```go
func SharedMemorySize() *f64
```

- *Type:* *f64

---

##### `Swappiness`<sup>Required</sup> <a name="Swappiness" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.swappiness"></a>

```go
func Swappiness() *f64
```

- *Type:* *f64

---

##### `Tmpfs`<sup>Required</sup> <a name="Tmpfs" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.tmpfs"></a>

```go
func Tmpfs() DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParameters">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParameters</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.get"></a>

```go
func Get(index *f64) DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.containerPath">ContainerPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.mountOptions">MountOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerPath`<sup>Required</sup> <a name="ContainerPath" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.containerPath"></a>

```go
func ContainerPath() *string
```

- *Type:* *string

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.mountOptions"></a>

```go
func MountOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsList <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsTaskDefinitionContainerDefinitionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.get"></a>

```go
func Get(index *f64) DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.logDriver">LogDriver</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.options">Options</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.secretOptions">SecretOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList">DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfiguration">DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogDriver`<sup>Required</sup> <a name="LogDriver" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.logDriver"></a>

```go
func LogDriver() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.options"></a>

```go
func Options() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `SecretOptions`<sup>Required</sup> <a name="SecretOptions" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.secretOptions"></a>

```go
func SecretOptions() DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList">DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfiguration">DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfiguration</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.get"></a>

```go
func Get(index *f64) DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.valueFrom">ValueFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions">DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ValueFrom`<sup>Required</sup> <a name="ValueFrom" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.valueFrom"></a>

```go
func ValueFrom() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions">DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.get"></a>

```go
func Get(index *f64) DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.containerPath">ContainerPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.readOnly">ReadOnly</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.sourceVolume">SourceVolume</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPoints">DataAwsccEcsTaskDefinitionContainerDefinitionsMountPoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerPath`<sup>Required</sup> <a name="ContainerPath" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.containerPath"></a>

```go
func ContainerPath() *string
```

- *Type:* *string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.readOnly"></a>

```go
func ReadOnly() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SourceVolume`<sup>Required</sup> <a name="SourceVolume" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.sourceVolume"></a>

```go
func SourceVolume() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionContainerDefinitionsMountPoints
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPoints">DataAwsccEcsTaskDefinitionContainerDefinitionsMountPoints</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.cpu">Cpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.credentialSpecs">CredentialSpecs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.dependsOn">DependsOn</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList">DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.disableNetworking">DisableNetworking</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.dnsSearchDomains">DnsSearchDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.dnsServers">DnsServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.dockerLabels">DockerLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.dockerSecurityOptions">DockerSecurityOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.entryPoint">EntryPoint</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.environment">Environment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList">DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.environmentFiles">EnvironmentFiles</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList">DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.essential">Essential</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.extraHosts">ExtraHosts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList">DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.firelensConfiguration">FirelensConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference">DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference">DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.interactive">Interactive</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.links">Links</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.linuxParameters">LinuxParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference">DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.memory">Memory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.memoryReservation">MemoryReservation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.mountPoints">MountPoints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList">DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.portMappings">PortMappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList">DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.privileged">Privileged</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.pseudoTerminal">PseudoTerminal</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.readonlyRootFilesystem">ReadonlyRootFilesystem</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.repositoryCredentials">RepositoryCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference">DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.resourceRequirements">ResourceRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList">DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.restartPolicy">RestartPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference">DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.secrets">Secrets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList">DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.startTimeout">StartTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.stopTimeout">StopTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.systemControls">SystemControls</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList">DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.ulimits">Ulimits</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList">DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.user">User</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.versionConsistency">VersionConsistency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.volumesFrom">VolumesFrom</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList">DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.workingDirectory">WorkingDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitions">DataAwsccEcsTaskDefinitionContainerDefinitions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.cpu"></a>

```go
func Cpu() *f64
```

- *Type:* *f64

---

##### `CredentialSpecs`<sup>Required</sup> <a name="CredentialSpecs" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.credentialSpecs"></a>

```go
func CredentialSpecs() *[]*string
```

- *Type:* *[]*string

---

##### `DependsOn`<sup>Required</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.dependsOn"></a>

```go
func DependsOn() DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList">DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList</a>

---

##### `DisableNetworking`<sup>Required</sup> <a name="DisableNetworking" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.disableNetworking"></a>

```go
func DisableNetworking() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `DnsSearchDomains`<sup>Required</sup> <a name="DnsSearchDomains" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.dnsSearchDomains"></a>

```go
func DnsSearchDomains() *[]*string
```

- *Type:* *[]*string

---

##### `DnsServers`<sup>Required</sup> <a name="DnsServers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.dnsServers"></a>

```go
func DnsServers() *[]*string
```

- *Type:* *[]*string

---

##### `DockerLabels`<sup>Required</sup> <a name="DockerLabels" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.dockerLabels"></a>

```go
func DockerLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `DockerSecurityOptions`<sup>Required</sup> <a name="DockerSecurityOptions" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.dockerSecurityOptions"></a>

```go
func DockerSecurityOptions() *[]*string
```

- *Type:* *[]*string

---

##### `EntryPoint`<sup>Required</sup> <a name="EntryPoint" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.entryPoint"></a>

```go
func EntryPoint() *[]*string
```

- *Type:* *[]*string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.environment"></a>

```go
func Environment() DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList">DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList</a>

---

##### `EnvironmentFiles`<sup>Required</sup> <a name="EnvironmentFiles" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.environmentFiles"></a>

```go
func EnvironmentFiles() DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList">DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList</a>

---

##### `Essential`<sup>Required</sup> <a name="Essential" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.essential"></a>

```go
func Essential() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ExtraHosts`<sup>Required</sup> <a name="ExtraHosts" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.extraHosts"></a>

```go
func ExtraHosts() DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList">DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList</a>

---

##### `FirelensConfiguration`<sup>Required</sup> <a name="FirelensConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.firelensConfiguration"></a>

```go
func FirelensConfiguration() DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference">DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference</a>

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.healthCheck"></a>

```go
func HealthCheck() DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference">DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference</a>

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `Interactive`<sup>Required</sup> <a name="Interactive" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.interactive"></a>

```go
func Interactive() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.links"></a>

```go
func Links() *[]*string
```

- *Type:* *[]*string

---

##### `LinuxParameters`<sup>Required</sup> <a name="LinuxParameters" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.linuxParameters"></a>

```go
func LinuxParameters() DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference</a>

---

##### `LogConfiguration`<sup>Required</sup> <a name="LogConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.logConfiguration"></a>

```go
func LogConfiguration() DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference">DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference</a>

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.memory"></a>

```go
func Memory() *f64
```

- *Type:* *f64

---

##### `MemoryReservation`<sup>Required</sup> <a name="MemoryReservation" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.memoryReservation"></a>

```go
func MemoryReservation() *f64
```

- *Type:* *f64

---

##### `MountPoints`<sup>Required</sup> <a name="MountPoints" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.mountPoints"></a>

```go
func MountPoints() DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList">DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PortMappings`<sup>Required</sup> <a name="PortMappings" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.portMappings"></a>

```go
func PortMappings() DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList">DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList</a>

---

##### `Privileged`<sup>Required</sup> <a name="Privileged" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.privileged"></a>

```go
func Privileged() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PseudoTerminal`<sup>Required</sup> <a name="PseudoTerminal" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.pseudoTerminal"></a>

```go
func PseudoTerminal() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ReadonlyRootFilesystem`<sup>Required</sup> <a name="ReadonlyRootFilesystem" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.readonlyRootFilesystem"></a>

```go
func ReadonlyRootFilesystem() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RepositoryCredentials`<sup>Required</sup> <a name="RepositoryCredentials" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.repositoryCredentials"></a>

```go
func RepositoryCredentials() DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference">DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference</a>

---

##### `ResourceRequirements`<sup>Required</sup> <a name="ResourceRequirements" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.resourceRequirements"></a>

```go
func ResourceRequirements() DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList">DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList</a>

---

##### `RestartPolicy`<sup>Required</sup> <a name="RestartPolicy" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.restartPolicy"></a>

```go
func RestartPolicy() DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference">DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference</a>

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.secrets"></a>

```go
func Secrets() DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList">DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList</a>

---

##### `StartTimeout`<sup>Required</sup> <a name="StartTimeout" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.startTimeout"></a>

```go
func StartTimeout() *f64
```

- *Type:* *f64

---

##### `StopTimeout`<sup>Required</sup> <a name="StopTimeout" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.stopTimeout"></a>

```go
func StopTimeout() *f64
```

- *Type:* *f64

---

##### `SystemControls`<sup>Required</sup> <a name="SystemControls" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.systemControls"></a>

```go
func SystemControls() DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList">DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList</a>

---

##### `Ulimits`<sup>Required</sup> <a name="Ulimits" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.ulimits"></a>

```go
func Ulimits() DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList">DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList</a>

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.user"></a>

```go
func User() *string
```

- *Type:* *string

---

##### `VersionConsistency`<sup>Required</sup> <a name="VersionConsistency" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.versionConsistency"></a>

```go
func VersionConsistency() *string
```

- *Type:* *string

---

##### `VolumesFrom`<sup>Required</sup> <a name="VolumesFrom" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.volumesFrom"></a>

```go
func VolumesFrom() DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList">DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList</a>

---

##### `WorkingDirectory`<sup>Required</sup> <a name="WorkingDirectory" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.workingDirectory"></a>

```go
func WorkingDirectory() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionContainerDefinitions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitions">DataAwsccEcsTaskDefinitionContainerDefinitions</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.get"></a>

```go
func Get(index *f64) DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.appProtocol">AppProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.containerPort">ContainerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.containerPortRange">ContainerPortRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.hostPort">HostPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappings">DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppProtocol`<sup>Required</sup> <a name="AppProtocol" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.appProtocol"></a>

```go
func AppProtocol() *string
```

- *Type:* *string

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.containerPort"></a>

```go
func ContainerPort() *f64
```

- *Type:* *f64

---

##### `ContainerPortRange`<sup>Required</sup> <a name="ContainerPortRange" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.containerPortRange"></a>

```go
func ContainerPortRange() *string
```

- *Type:* *string

---

##### `HostPort`<sup>Required</sup> <a name="HostPort" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.hostPort"></a>

```go
func HostPort() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappings">DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappings</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.credentialsParameter">CredentialsParameter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentials">DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CredentialsParameter`<sup>Required</sup> <a name="CredentialsParameter" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.credentialsParameter"></a>

```go
func CredentialsParameter() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentials
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentials">DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentials</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.get"></a>

```go
func Get(index *f64) DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirements">DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirements
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirements">DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirements</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.ignoredExitCodes">IgnoredExitCodes</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.restartAttemptPeriod">RestartAttemptPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicy">DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IgnoredExitCodes`<sup>Required</sup> <a name="IgnoredExitCodes" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.ignoredExitCodes"></a>

```go
func IgnoredExitCodes() *[]*f64
```

- *Type:* *[]*f64

---

##### `RestartAttemptPeriod`<sup>Required</sup> <a name="RestartAttemptPeriod" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.restartAttemptPeriod"></a>

```go
func RestartAttemptPeriod() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicy">DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicy</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.get"></a>

```go
func Get(index *f64) DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.property.valueFrom">ValueFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecrets">DataAwsccEcsTaskDefinitionContainerDefinitionsSecrets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ValueFrom`<sup>Required</sup> <a name="ValueFrom" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.property.valueFrom"></a>

```go
func ValueFrom() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionContainerDefinitionsSecrets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecrets">DataAwsccEcsTaskDefinitionContainerDefinitionsSecrets</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.get"></a>

```go
func Get(index *f64) DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControls">DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControls
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControls">DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControls</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.get"></a>

```go
func Get(index *f64) DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.hardLimit">HardLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.softLimit">SoftLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimits">DataAwsccEcsTaskDefinitionContainerDefinitionsUlimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HardLimit`<sup>Required</sup> <a name="HardLimit" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.hardLimit"></a>

```go
func HardLimit() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SoftLimit`<sup>Required</sup> <a name="SoftLimit" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.softLimit"></a>

```go
func SoftLimit() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionContainerDefinitionsUlimits
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimits">DataAwsccEcsTaskDefinitionContainerDefinitionsUlimits</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.get"></a>

```go
func Get(index *f64) DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.property.readOnly">ReadOnly</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.property.sourceContainer">SourceContainer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFrom">DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFrom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.property.readOnly"></a>

```go
func ReadOnly() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SourceContainer`<sup>Required</sup> <a name="SourceContainer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.property.sourceContainer"></a>

```go
func SourceContainer() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFrom
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFrom">DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFrom</a>

---


### DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference <a name="DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionEphemeralStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.property.sizeInGiB">SizeInGiB</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorage">DataAwsccEcsTaskDefinitionEphemeralStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SizeInGiB`<sup>Required</sup> <a name="SizeInGiB" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.property.sizeInGiB"></a>

```go
func SizeInGiB() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionEphemeralStorage
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorage">DataAwsccEcsTaskDefinitionEphemeralStorage</a>

---


### DataAwsccEcsTaskDefinitionInferenceAcceleratorsList <a name="DataAwsccEcsTaskDefinitionInferenceAcceleratorsList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionInferenceAcceleratorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsTaskDefinitionInferenceAcceleratorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.get"></a>

```go
func Get(index *f64) DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference <a name="DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.property.deviceType">DeviceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAccelerators">DataAwsccEcsTaskDefinitionInferenceAccelerators</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `DeviceType`<sup>Required</sup> <a name="DeviceType" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.property.deviceType"></a>

```go
func DeviceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionInferenceAccelerators
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAccelerators">DataAwsccEcsTaskDefinitionInferenceAccelerators</a>

---


### DataAwsccEcsTaskDefinitionPlacementConstraintsList <a name="DataAwsccEcsTaskDefinitionPlacementConstraintsList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionPlacementConstraintsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsTaskDefinitionPlacementConstraintsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.get"></a>

```go
func Get(index *f64) DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference <a name="DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraints">DataAwsccEcsTaskDefinitionPlacementConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionPlacementConstraints
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraints">DataAwsccEcsTaskDefinitionPlacementConstraints</a>

---


### DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference <a name="DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionProxyConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.property.containerName">ContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.property.proxyConfigurationProperties">ProxyConfigurationProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList">DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfiguration">DataAwsccEcsTaskDefinitionProxyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.property.containerName"></a>

```go
func ContainerName() *string
```

- *Type:* *string

---

##### `ProxyConfigurationProperties`<sup>Required</sup> <a name="ProxyConfigurationProperties" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.property.proxyConfigurationProperties"></a>

```go
func ProxyConfigurationProperties() DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList">DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionProxyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfiguration">DataAwsccEcsTaskDefinitionProxyConfiguration</a>

---


### DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList <a name="DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.get"></a>

```go
func Get(index *f64) DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference <a name="DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationProperties">DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationProperties">DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationProperties</a>

---


### DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference <a name="DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionRuntimePlatformOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.property.cpuArchitecture">CpuArchitecture</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.property.operatingSystemFamily">OperatingSystemFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatform">DataAwsccEcsTaskDefinitionRuntimePlatform</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuArchitecture`<sup>Required</sup> <a name="CpuArchitecture" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.property.cpuArchitecture"></a>

```go
func CpuArchitecture() *string
```

- *Type:* *string

---

##### `OperatingSystemFamily`<sup>Required</sup> <a name="OperatingSystemFamily" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.property.operatingSystemFamily"></a>

```go
func OperatingSystemFamily() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionRuntimePlatform
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatform">DataAwsccEcsTaskDefinitionRuntimePlatform</a>

---


### DataAwsccEcsTaskDefinitionTagsList <a name="DataAwsccEcsTaskDefinitionTagsList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsTaskDefinitionTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.get"></a>

```go
func Get(index *f64) DataAwsccEcsTaskDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsTaskDefinitionTagsOutputReference <a name="DataAwsccEcsTaskDefinitionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsTaskDefinitionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTags">DataAwsccEcsTaskDefinitionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTags">DataAwsccEcsTaskDefinitionTags</a>

---


### DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference <a name="DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.autoprovision">Autoprovision</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.driver">Driver</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.driverOpts">DriverOpts</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.labels">Labels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfiguration">DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Autoprovision`<sup>Required</sup> <a name="Autoprovision" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.autoprovision"></a>

```go
func Autoprovision() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Driver`<sup>Required</sup> <a name="Driver" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.driver"></a>

```go
func Driver() *string
```

- *Type:* *string

---

##### `DriverOpts`<sup>Required</sup> <a name="DriverOpts" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.driverOpts"></a>

```go
func DriverOpts() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfiguration">DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfiguration</a>

---


### DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference <a name="DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.property.accessPointId">AccessPointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.property.iam">Iam</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig">DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessPointId`<sup>Required</sup> <a name="AccessPointId" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.property.accessPointId"></a>

```go
func AccessPointId() *string
```

- *Type:* *string

---

##### `Iam`<sup>Required</sup> <a name="Iam" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.property.iam"></a>

```go
func Iam() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig">DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig</a>

---


### DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference <a name="DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference">DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.filesystemId">FilesystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.rootDirectory">RootDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.transitEncryption">TransitEncryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.transitEncryptionPort">TransitEncryptionPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfiguration">DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.authorizationConfig"></a>

```go
func AuthorizationConfig() DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference">DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference</a>

---

##### `FilesystemId`<sup>Required</sup> <a name="FilesystemId" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.filesystemId"></a>

```go
func FilesystemId() *string
```

- *Type:* *string

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.rootDirectory"></a>

```go
func RootDirectory() *string
```

- *Type:* *string

---

##### `TransitEncryption`<sup>Required</sup> <a name="TransitEncryption" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.transitEncryption"></a>

```go
func TransitEncryption() *string
```

- *Type:* *string

---

##### `TransitEncryptionPort`<sup>Required</sup> <a name="TransitEncryptionPort" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.transitEncryptionPort"></a>

```go
func TransitEncryptionPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfiguration">DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfiguration</a>

---


### DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference <a name="DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.credentialsParameter">CredentialsParameter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CredentialsParameter`<sup>Required</sup> <a name="CredentialsParameter" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.credentialsParameter"></a>

```go
func CredentialsParameter() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a>

---


### DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference <a name="DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference">DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.property.fileSystemId">FileSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.property.rootDirectory">RootDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfiguration">DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.property.authorizationConfig"></a>

```go
func AuthorizationConfig() DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference">DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference</a>

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.property.fileSystemId"></a>

```go
func FileSystemId() *string
```

- *Type:* *string

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.property.rootDirectory"></a>

```go
func RootDirectory() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfiguration">DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfiguration</a>

---


### DataAwsccEcsTaskDefinitionVolumesHostOutputReference <a name="DataAwsccEcsTaskDefinitionVolumesHostOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionVolumesHostOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsTaskDefinitionVolumesHostOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.property.sourcePath">SourcePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHost">DataAwsccEcsTaskDefinitionVolumesHost</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourcePath`<sup>Required</sup> <a name="SourcePath" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.property.sourcePath"></a>

```go
func SourcePath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionVolumesHost
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHost">DataAwsccEcsTaskDefinitionVolumesHost</a>

---


### DataAwsccEcsTaskDefinitionVolumesList <a name="DataAwsccEcsTaskDefinitionVolumesList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsTaskDefinitionVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.get"></a>

```go
func Get(index *f64) DataAwsccEcsTaskDefinitionVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsTaskDefinitionVolumesOutputReference <a name="DataAwsccEcsTaskDefinitionVolumesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsTaskDefinitionVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.configuredAtLaunch">ConfiguredAtLaunch</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.dockerVolumeConfiguration">DockerVolumeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference">DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.efsVolumeConfiguration">EfsVolumeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference">DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.fsxWindowsFileServerVolumeConfiguration">FsxWindowsFileServerVolumeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference">DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.host">Host</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference">DataAwsccEcsTaskDefinitionVolumesHostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.s3FilesVolumeConfiguration">S3FilesVolumeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference">DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumes">DataAwsccEcsTaskDefinitionVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfiguredAtLaunch`<sup>Required</sup> <a name="ConfiguredAtLaunch" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.configuredAtLaunch"></a>

```go
func ConfiguredAtLaunch() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `DockerVolumeConfiguration`<sup>Required</sup> <a name="DockerVolumeConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.dockerVolumeConfiguration"></a>

```go
func DockerVolumeConfiguration() DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference">DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference</a>

---

##### `EfsVolumeConfiguration`<sup>Required</sup> <a name="EfsVolumeConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.efsVolumeConfiguration"></a>

```go
func EfsVolumeConfiguration() DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference">DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference</a>

---

##### `FsxWindowsFileServerVolumeConfiguration`<sup>Required</sup> <a name="FsxWindowsFileServerVolumeConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.fsxWindowsFileServerVolumeConfiguration"></a>

```go
func FsxWindowsFileServerVolumeConfiguration() DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference">DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference</a>

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.host"></a>

```go
func Host() DataAwsccEcsTaskDefinitionVolumesHostOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference">DataAwsccEcsTaskDefinitionVolumesHostOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `S3FilesVolumeConfiguration`<sup>Required</sup> <a name="S3FilesVolumeConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.s3FilesVolumeConfiguration"></a>

```go
func S3FilesVolumeConfiguration() DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference">DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionVolumes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumes">DataAwsccEcsTaskDefinitionVolumes</a>

---


### DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference <a name="DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecstaskdefinition"

dataawsccecstaskdefinition.NewDataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.property.accessPointArn">AccessPointArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.property.fileSystemArn">FileSystemArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.property.rootDirectory">RootDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.property.transitEncryptionPort">TransitEncryptionPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfiguration">DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessPointArn`<sup>Required</sup> <a name="AccessPointArn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.property.accessPointArn"></a>

```go
func AccessPointArn() *string
```

- *Type:* *string

---

##### `FileSystemArn`<sup>Required</sup> <a name="FileSystemArn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.property.fileSystemArn"></a>

```go
func FileSystemArn() *string
```

- *Type:* *string

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.property.rootDirectory"></a>

```go
func RootDirectory() *string
```

- *Type:* *string

---

##### `TransitEncryptionPort`<sup>Required</sup> <a name="TransitEncryptionPort" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.property.transitEncryptionPort"></a>

```go
func TransitEncryptionPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfiguration">DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfiguration</a>

---



