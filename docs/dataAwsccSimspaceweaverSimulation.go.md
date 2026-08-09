# `dataAwsccSimspaceweaverSimulation` Submodule <a name="`dataAwsccSimspaceweaverSimulation` Submodule" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSimspaceweaverSimulation <a name="DataAwsccSimspaceweaverSimulation" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/simspaceweaver_simulation awscc_simspaceweaver_simulation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsimspaceweaversimulation"

dataawsccsimspaceweaversimulation.NewDataAwsccSimspaceweaverSimulation(scope Construct, id *string, config DataAwsccSimspaceweaverSimulationConfig) DataAwsccSimspaceweaverSimulation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig">DataAwsccSimspaceweaverSimulationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig">DataAwsccSimspaceweaverSimulationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSimspaceweaverSimulation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsimspaceweaversimulation"

dataawsccsimspaceweaversimulation.DataAwsccSimspaceweaverSimulation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsimspaceweaversimulation"

dataawsccsimspaceweaversimulation.DataAwsccSimspaceweaverSimulation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsimspaceweaversimulation"

dataawsccsimspaceweaversimulation.DataAwsccSimspaceweaverSimulation_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsimspaceweaversimulation"

dataawsccsimspaceweaversimulation.DataAwsccSimspaceweaverSimulation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccSimspaceweaverSimulation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccSimspaceweaverSimulation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccSimspaceweaverSimulation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/simspaceweaver_simulation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSimspaceweaverSimulation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.describePayload">DescribePayload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.maximumDuration">MaximumDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.schemaS3Location">SchemaS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference">DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.snapshotS3Location">SnapshotS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference">DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `DescribePayload`<sup>Required</sup> <a name="DescribePayload" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.describePayload"></a>

```go
func DescribePayload() *string
```

- *Type:* *string

---

##### `MaximumDuration`<sup>Required</sup> <a name="MaximumDuration" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.maximumDuration"></a>

```go
func MaximumDuration() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SchemaS3Location`<sup>Required</sup> <a name="SchemaS3Location" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.schemaS3Location"></a>

```go
func SchemaS3Location() DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference">DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference</a>

---

##### `SnapshotS3Location`<sup>Required</sup> <a name="SnapshotS3Location" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.snapshotS3Location"></a>

```go
func SnapshotS3Location() DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference">DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSimspaceweaverSimulationConfig <a name="DataAwsccSimspaceweaverSimulationConfig" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsimspaceweaversimulation"

&dataawsccsimspaceweaversimulation.DataAwsccSimspaceweaverSimulationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/simspaceweaver_simulation#id DataAwsccSimspaceweaverSimulation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSimspaceweaverSimulationSchemaS3Location <a name="DataAwsccSimspaceweaverSimulationSchemaS3Location" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3Location.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsimspaceweaversimulation"

&dataawsccsimspaceweaversimulation.DataAwsccSimspaceweaverSimulationSchemaS3Location {

}
```


### DataAwsccSimspaceweaverSimulationSnapshotS3Location <a name="DataAwsccSimspaceweaverSimulationSnapshotS3Location" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3Location.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsimspaceweaversimulation"

&dataawsccsimspaceweaversimulation.DataAwsccSimspaceweaverSimulationSnapshotS3Location {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference <a name="DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsimspaceweaversimulation"

dataawsccsimspaceweaversimulation.NewDataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.objectKey">ObjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3Location">DataAwsccSimspaceweaverSimulationSchemaS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `ObjectKey`<sup>Required</sup> <a name="ObjectKey" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.objectKey"></a>

```go
func ObjectKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSimspaceweaverSimulationSchemaS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3Location">DataAwsccSimspaceweaverSimulationSchemaS3Location</a>

---


### DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference <a name="DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsimspaceweaversimulation"

dataawsccsimspaceweaversimulation.NewDataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.objectKey">ObjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3Location">DataAwsccSimspaceweaverSimulationSnapshotS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `ObjectKey`<sup>Required</sup> <a name="ObjectKey" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.objectKey"></a>

```go
func ObjectKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSimspaceweaverSimulationSnapshotS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3Location">DataAwsccSimspaceweaverSimulationSnapshotS3Location</a>

---



