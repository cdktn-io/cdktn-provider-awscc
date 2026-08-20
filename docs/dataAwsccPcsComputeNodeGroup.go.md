# `dataAwsccPcsComputeNodeGroup` Submodule <a name="`dataAwsccPcsComputeNodeGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccPcsComputeNodeGroup <a name="DataAwsccPcsComputeNodeGroup" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/pcs_compute_node_group awscc_pcs_compute_node_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

dataawsccpcscomputenodegroup.NewDataAwsccPcsComputeNodeGroup(scope Construct, id *string, config DataAwsccPcsComputeNodeGroupConfig) DataAwsccPcsComputeNodeGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig">DataAwsccPcsComputeNodeGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig">DataAwsccPcsComputeNodeGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccPcsComputeNodeGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

dataawsccpcscomputenodegroup.DataAwsccPcsComputeNodeGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

dataawsccpcscomputenodegroup.DataAwsccPcsComputeNodeGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

dataawsccpcscomputenodegroup.DataAwsccPcsComputeNodeGroup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

dataawsccpcscomputenodegroup.DataAwsccPcsComputeNodeGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccPcsComputeNodeGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccPcsComputeNodeGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccPcsComputeNodeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/pcs_compute_node_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccPcsComputeNodeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.amiId">AmiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.computeNodeGroupId">ComputeNodeGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.customLaunchTemplate">CustomLaunchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference">DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.errorInfo">ErrorInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList">DataAwsccPcsComputeNodeGroupErrorInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.iamInstanceProfileArn">IamInstanceProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.instanceConfigs">InstanceConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList">DataAwsccPcsComputeNodeGroupInstanceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.nodeLifecycleActions">NodeLifecycleActions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.purchaseOption">PurchaseOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.scalingConfiguration">ScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference">DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.slurmConfiguration">SlurmConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference">DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.spotOptions">SpotOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference">DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AmiId`<sup>Required</sup> <a name="AmiId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.amiId"></a>

```go
func AmiId() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `ComputeNodeGroupId`<sup>Required</sup> <a name="ComputeNodeGroupId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.computeNodeGroupId"></a>

```go
func ComputeNodeGroupId() *string
```

- *Type:* *string

---

##### `CustomLaunchTemplate`<sup>Required</sup> <a name="CustomLaunchTemplate" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.customLaunchTemplate"></a>

```go
func CustomLaunchTemplate() DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference">DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference</a>

---

##### `ErrorInfo`<sup>Required</sup> <a name="ErrorInfo" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.errorInfo"></a>

```go
func ErrorInfo() DataAwsccPcsComputeNodeGroupErrorInfoList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList">DataAwsccPcsComputeNodeGroupErrorInfoList</a>

---

##### `IamInstanceProfileArn`<sup>Required</sup> <a name="IamInstanceProfileArn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.iamInstanceProfileArn"></a>

```go
func IamInstanceProfileArn() *string
```

- *Type:* *string

---

##### `InstanceConfigs`<sup>Required</sup> <a name="InstanceConfigs" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.instanceConfigs"></a>

```go
func InstanceConfigs() DataAwsccPcsComputeNodeGroupInstanceConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList">DataAwsccPcsComputeNodeGroupInstanceConfigsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeLifecycleActions`<sup>Required</sup> <a name="NodeLifecycleActions" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.nodeLifecycleActions"></a>

```go
func NodeLifecycleActions() DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference</a>

---

##### `PurchaseOption`<sup>Required</sup> <a name="PurchaseOption" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.purchaseOption"></a>

```go
func PurchaseOption() *string
```

- *Type:* *string

---

##### `ScalingConfiguration`<sup>Required</sup> <a name="ScalingConfiguration" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.scalingConfiguration"></a>

```go
func ScalingConfiguration() DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference">DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference</a>

---

##### `SlurmConfiguration`<sup>Required</sup> <a name="SlurmConfiguration" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.slurmConfiguration"></a>

```go
func SlurmConfiguration() DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference">DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference</a>

---

##### `SpotOptions`<sup>Required</sup> <a name="SpotOptions" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.spotOptions"></a>

```go
func SpotOptions() DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference">DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccPcsComputeNodeGroupConfig <a name="DataAwsccPcsComputeNodeGroupConfig" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

&dataawsccpcscomputenodegroup.DataAwsccPcsComputeNodeGroupConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/pcs_compute_node_group#id DataAwsccPcsComputeNodeGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccPcsComputeNodeGroupCustomLaunchTemplate <a name="DataAwsccPcsComputeNodeGroupCustomLaunchTemplate" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

&dataawsccpcscomputenodegroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplate {

}
```


### DataAwsccPcsComputeNodeGroupErrorInfo <a name="DataAwsccPcsComputeNodeGroupErrorInfo" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

&dataawsccpcscomputenodegroup.DataAwsccPcsComputeNodeGroupErrorInfo {

}
```


### DataAwsccPcsComputeNodeGroupInstanceConfigs <a name="DataAwsccPcsComputeNodeGroupInstanceConfigs" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

&dataawsccpcscomputenodegroup.DataAwsccPcsComputeNodeGroupInstanceConfigs {

}
```


### DataAwsccPcsComputeNodeGroupNodeLifecycleActions <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActions" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

&dataawsccpcscomputenodegroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActions {

}
```


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

&dataawsccpcscomputenodegroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages {

}
```


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

&dataawsccpcscomputenodegroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped {

}
```


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

&dataawsccpcscomputenodegroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource {

}
```


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

&dataawsccpcscomputenodegroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady {

}
```


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

&dataawsccpcscomputenodegroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource {

}
```


### DataAwsccPcsComputeNodeGroupScalingConfiguration <a name="DataAwsccPcsComputeNodeGroupScalingConfiguration" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

&dataawsccpcscomputenodegroup.DataAwsccPcsComputeNodeGroupScalingConfiguration {

}
```


### DataAwsccPcsComputeNodeGroupSlurmConfiguration <a name="DataAwsccPcsComputeNodeGroupSlurmConfiguration" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

&dataawsccpcscomputenodegroup.DataAwsccPcsComputeNodeGroupSlurmConfiguration {

}
```


### DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings <a name="DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

&dataawsccpcscomputenodegroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings {

}
```


### DataAwsccPcsComputeNodeGroupSpotOptions <a name="DataAwsccPcsComputeNodeGroupSpotOptions" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

&dataawsccpcscomputenodegroup.DataAwsccPcsComputeNodeGroupSpotOptions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference <a name="DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

dataawsccpcscomputenodegroup.NewDataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.templateId">TemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplate">DataAwsccPcsComputeNodeGroupCustomLaunchTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TemplateId`<sup>Required</sup> <a name="TemplateId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.templateId"></a>

```go
func TemplateId() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPcsComputeNodeGroupCustomLaunchTemplate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplate">DataAwsccPcsComputeNodeGroupCustomLaunchTemplate</a>

---


### DataAwsccPcsComputeNodeGroupErrorInfoList <a name="DataAwsccPcsComputeNodeGroupErrorInfoList" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

dataawsccpcscomputenodegroup.NewDataAwsccPcsComputeNodeGroupErrorInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccPcsComputeNodeGroupErrorInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.get"></a>

```go
func Get(index *f64) DataAwsccPcsComputeNodeGroupErrorInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccPcsComputeNodeGroupErrorInfoOutputReference <a name="DataAwsccPcsComputeNodeGroupErrorInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

dataawsccpcscomputenodegroup.NewDataAwsccPcsComputeNodeGroupErrorInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccPcsComputeNodeGroupErrorInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfo">DataAwsccPcsComputeNodeGroupErrorInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPcsComputeNodeGroupErrorInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfo">DataAwsccPcsComputeNodeGroupErrorInfo</a>

---


### DataAwsccPcsComputeNodeGroupInstanceConfigsList <a name="DataAwsccPcsComputeNodeGroupInstanceConfigsList" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

dataawsccpcscomputenodegroup.NewDataAwsccPcsComputeNodeGroupInstanceConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccPcsComputeNodeGroupInstanceConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.get"></a>

```go
func Get(index *f64) DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference <a name="DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

dataawsccpcscomputenodegroup.NewDataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigs">DataAwsccPcsComputeNodeGroupInstanceConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPcsComputeNodeGroupInstanceConfigs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigs">DataAwsccPcsComputeNodeGroupInstanceConfigs</a>

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

dataawsccpcscomputenodegroup.NewDataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.scriptCachingPolicy">ScriptCachingPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.stages">Stages</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActions">DataAwsccPcsComputeNodeGroupNodeLifecycleActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScriptCachingPolicy`<sup>Required</sup> <a name="ScriptCachingPolicy" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.scriptCachingPolicy"></a>

```go
func ScriptCachingPolicy() *string
```

- *Type:* *string

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.stages"></a>

```go
func Stages() DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPcsComputeNodeGroupNodeLifecycleActions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActions">DataAwsccPcsComputeNodeGroupNodeLifecycleActions</a>

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

dataawsccpcscomputenodegroup.NewDataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.get"></a>

```go
func Get(index *f64) DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

dataawsccpcscomputenodegroup.NewDataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.arguments">Arguments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.executionPolicy">ExecutionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.onError">OnError</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.scriptSource">ScriptSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.arguments"></a>

```go
func Arguments() *[]*string
```

- *Type:* *[]*string

---

##### `ExecutionPolicy`<sup>Required</sup> <a name="ExecutionPolicy" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.executionPolicy"></a>

```go
func ExecutionPolicy() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OnError`<sup>Required</sup> <a name="OnError" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.onError"></a>

```go
func OnError() *string
```

- *Type:* *string

---

##### `ScriptSource`<sup>Required</sup> <a name="ScriptSource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.scriptSource"></a>

```go
func ScriptSource() DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped</a>

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

dataawsccpcscomputenodegroup.NewDataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.checksum">Checksum</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.s3VersionId">S3VersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.scriptLocation">ScriptLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Checksum`<sup>Required</sup> <a name="Checksum" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.checksum"></a>

```go
func Checksum() *string
```

- *Type:* *string

---

##### `S3VersionId`<sup>Required</sup> <a name="S3VersionId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.s3VersionId"></a>

```go
func S3VersionId() *string
```

- *Type:* *string

---

##### `ScriptLocation`<sup>Required</sup> <a name="ScriptLocation" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.scriptLocation"></a>

```go
func ScriptLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource</a>

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

dataawsccpcscomputenodegroup.NewDataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.get"></a>

```go
func Get(index *f64) DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

dataawsccpcscomputenodegroup.NewDataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.arguments">Arguments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.executionPolicy">ExecutionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.onError">OnError</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.scriptSource">ScriptSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.arguments"></a>

```go
func Arguments() *[]*string
```

- *Type:* *[]*string

---

##### `ExecutionPolicy`<sup>Required</sup> <a name="ExecutionPolicy" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.executionPolicy"></a>

```go
func ExecutionPolicy() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OnError`<sup>Required</sup> <a name="OnError" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.onError"></a>

```go
func OnError() *string
```

- *Type:* *string

---

##### `ScriptSource`<sup>Required</sup> <a name="ScriptSource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.scriptSource"></a>

```go
func ScriptSource() DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady</a>

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

dataawsccpcscomputenodegroup.NewDataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.checksum">Checksum</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.s3VersionId">S3VersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.scriptLocation">ScriptLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Checksum`<sup>Required</sup> <a name="Checksum" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.checksum"></a>

```go
func Checksum() *string
```

- *Type:* *string

---

##### `S3VersionId`<sup>Required</sup> <a name="S3VersionId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.s3VersionId"></a>

```go
func S3VersionId() *string
```

- *Type:* *string

---

##### `ScriptLocation`<sup>Required</sup> <a name="ScriptLocation" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.scriptLocation"></a>

```go
func ScriptLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource</a>

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

dataawsccpcscomputenodegroup.NewDataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeBootstrapped">NodeBootstrapped</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeReady">NodeReady</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NodeBootstrapped`<sup>Required</sup> <a name="NodeBootstrapped" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeBootstrapped"></a>

```go
func NodeBootstrapped() DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList</a>

---

##### `NodeReady`<sup>Required</sup> <a name="NodeReady" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeReady"></a>

```go
func NodeReady() DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages</a>

---


### DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference <a name="DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

dataawsccpcscomputenodegroup.NewDataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.minInstanceCount">MinInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfiguration">DataAwsccPcsComputeNodeGroupScalingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.maxInstanceCount"></a>

```go
func MaxInstanceCount() *f64
```

- *Type:* *f64

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.minInstanceCount"></a>

```go
func MinInstanceCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPcsComputeNodeGroupScalingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfiguration">DataAwsccPcsComputeNodeGroupScalingConfiguration</a>

---


### DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference <a name="DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

dataawsccpcscomputenodegroup.NewDataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.scaleDownIdleTimeInSeconds">ScaleDownIdleTimeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.slurmCustomSettings">SlurmCustomSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList">DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfiguration">DataAwsccPcsComputeNodeGroupSlurmConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScaleDownIdleTimeInSeconds`<sup>Required</sup> <a name="ScaleDownIdleTimeInSeconds" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.scaleDownIdleTimeInSeconds"></a>

```go
func ScaleDownIdleTimeInSeconds() *f64
```

- *Type:* *f64

---

##### `SlurmCustomSettings`<sup>Required</sup> <a name="SlurmCustomSettings" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.slurmCustomSettings"></a>

```go
func SlurmCustomSettings() DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList">DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPcsComputeNodeGroupSlurmConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfiguration">DataAwsccPcsComputeNodeGroupSlurmConfiguration</a>

---


### DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList <a name="DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

dataawsccpcscomputenodegroup.NewDataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.get"></a>

```go
func Get(index *f64) DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference <a name="DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

dataawsccpcscomputenodegroup.NewDataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterName">ParameterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValue">ParameterValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings">DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterName"></a>

```go
func ParameterName() *string
```

- *Type:* *string

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValue"></a>

```go
func ParameterValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings">DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings</a>

---


### DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference <a name="DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcscomputenodegroup"

dataawsccpcscomputenodegroup.NewDataAwsccPcsComputeNodeGroupSpotOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptions">DataAwsccPcsComputeNodeGroupSpotOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.allocationStrategy"></a>

```go
func AllocationStrategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPcsComputeNodeGroupSpotOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptions">DataAwsccPcsComputeNodeGroupSpotOptions</a>

---



