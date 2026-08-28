# `dataAwsccAthenaWorkGroup` Submodule <a name="`dataAwsccAthenaWorkGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAthenaWorkGroup <a name="DataAwsccAthenaWorkGroup" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/athena_work_group awscc_athena_work_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroup(scope Construct, id *string, config DataAwsccAthenaWorkGroupConfig) DataAwsccAthenaWorkGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupConfig">DataAwsccAthenaWorkGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupConfig">DataAwsccAthenaWorkGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAthenaWorkGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.DataAwsccAthenaWorkGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.DataAwsccAthenaWorkGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.DataAwsccAthenaWorkGroup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.DataAwsccAthenaWorkGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccAthenaWorkGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccAthenaWorkGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccAthenaWorkGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/athena_work_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAthenaWorkGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.recursiveDeleteOption">RecursiveDeleteOption</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsList">DataAwsccAthenaWorkGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.workGroupConfiguration">WorkGroupConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.workGroupConfigurationUpdates">WorkGroupConfigurationUpdates</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RecursiveDeleteOption`<sup>Required</sup> <a name="RecursiveDeleteOption" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.recursiveDeleteOption"></a>

```go
func RecursiveDeleteOption() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.tags"></a>

```go
func Tags() DataAwsccAthenaWorkGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsList">DataAwsccAthenaWorkGroupTagsList</a>

---

##### `WorkGroupConfiguration`<sup>Required</sup> <a name="WorkGroupConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.workGroupConfiguration"></a>

```go
func WorkGroupConfiguration() DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference</a>

---

##### `WorkGroupConfigurationUpdates`<sup>Required</sup> <a name="WorkGroupConfigurationUpdates" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.workGroupConfigurationUpdates"></a>

```go
func WorkGroupConfigurationUpdates() DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAthenaWorkGroupConfig <a name="DataAwsccAthenaWorkGroupConfig" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

&dataawsccathenaworkgroup.DataAwsccAthenaWorkGroupConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/athena_work_group#id DataAwsccAthenaWorkGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAthenaWorkGroupTags <a name="DataAwsccAthenaWorkGroupTags" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

&dataawsccathenaworkgroup.DataAwsccAthenaWorkGroupTags {

}
```


### DataAwsccAthenaWorkGroupWorkGroupConfiguration <a name="DataAwsccAthenaWorkGroupWorkGroupConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

&dataawsccathenaworkgroup.DataAwsccAthenaWorkGroupWorkGroupConfiguration {

}
```


### DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

&dataawsccathenaworkgroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration {

}
```


### DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfiguration <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

&dataawsccathenaworkgroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfiguration {

}
```


### DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

&dataawsccathenaworkgroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications {

}
```


### DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersion <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersion" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

&dataawsccathenaworkgroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersion {

}
```


### DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

&dataawsccathenaworkgroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration {

}
```


### DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

&dataawsccathenaworkgroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration {

}
```


### DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

&dataawsccathenaworkgroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration {

}
```


### DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

&dataawsccathenaworkgroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration {

}
```


### DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

&dataawsccathenaworkgroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration {

}
```


### DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

&dataawsccathenaworkgroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration {

}
```


### DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfiguration <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

&dataawsccathenaworkgroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfiguration {

}
```


### DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

&dataawsccathenaworkgroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration {

}
```


### DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

&dataawsccathenaworkgroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration {

}
```


### DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdates <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdates" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdates.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

&dataawsccathenaworkgroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdates {

}
```


### DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

&dataawsccathenaworkgroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration {

}
```


### DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

&dataawsccathenaworkgroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration {

}
```


### DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

&dataawsccathenaworkgroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications {

}
```


### DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

&dataawsccathenaworkgroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion {

}
```


### DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

&dataawsccathenaworkgroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration {

}
```


### DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

&dataawsccathenaworkgroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration {

}
```


### DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

&dataawsccathenaworkgroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration {

}
```


### DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

&dataawsccathenaworkgroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration {

}
```


### DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

&dataawsccathenaworkgroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration {

}
```


### DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

&dataawsccathenaworkgroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration {

}
```


### DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

&dataawsccathenaworkgroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates {

}
```


### DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

&dataawsccathenaworkgroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration {

}
```


### DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

&dataawsccathenaworkgroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAthenaWorkGroupTagsList <a name="DataAwsccAthenaWorkGroupTagsList" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAthenaWorkGroupTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsList.get"></a>

```go
func Get(index *f64) DataAwsccAthenaWorkGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAthenaWorkGroupTagsOutputReference <a name="DataAwsccAthenaWorkGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAthenaWorkGroupTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTags">DataAwsccAthenaWorkGroupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAthenaWorkGroupTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupTags">DataAwsccAthenaWorkGroupTags</a>

---


### DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration</a>

---


### DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.get"></a>

```go
func Get(index *f64) DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.properties">Properties</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications">DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.properties"></a>

```go
func Properties() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications">DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications</a>

---


### DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.additionalConfigs">AdditionalConfigs</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.classifications">Classifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList">DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.coordinatorDpuSize">CoordinatorDpuSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.defaultExecutorDpuSize">DefaultExecutorDpuSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.maxConcurrentDpus">MaxConcurrentDpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.sparkProperties">SparkProperties</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalConfigs`<sup>Required</sup> <a name="AdditionalConfigs" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.additionalConfigs"></a>

```go
func AdditionalConfigs() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Classifications`<sup>Required</sup> <a name="Classifications" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.classifications"></a>

```go
func Classifications() DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList">DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList</a>

---

##### `CoordinatorDpuSize`<sup>Required</sup> <a name="CoordinatorDpuSize" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.coordinatorDpuSize"></a>

```go
func CoordinatorDpuSize() *f64
```

- *Type:* *f64

---

##### `DefaultExecutorDpuSize`<sup>Required</sup> <a name="DefaultExecutorDpuSize" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.defaultExecutorDpuSize"></a>

```go
func DefaultExecutorDpuSize() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentDpus`<sup>Required</sup> <a name="MaxConcurrentDpus" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.maxConcurrentDpus"></a>

```go
func MaxConcurrentDpus() *f64
```

- *Type:* *f64

---

##### `SparkProperties`<sup>Required</sup> <a name="SparkProperties" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.sparkProperties"></a>

```go
func SparkProperties() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfiguration</a>

---


### DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.effectiveEngineVersion">EffectiveEngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.selectedEngineVersion">SelectedEngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersion">DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectiveEngineVersion`<sup>Required</sup> <a name="EffectiveEngineVersion" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.effectiveEngineVersion"></a>

```go
func EffectiveEngineVersion() *string
```

- *Type:* *string

---

##### `SelectedEngineVersion`<sup>Required</sup> <a name="SelectedEngineVersion" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.selectedEngineVersion"></a>

```go
func SelectedEngineVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersion
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersion">DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersion</a>

---


### DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a>

---


### DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration</a>

---


### DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroup">LogGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefix">LogStreamNamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypes">LogTypes</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringListMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroup"></a>

```go
func LogGroup() *string
```

- *Type:* *string

---

##### `LogStreamNamePrefix`<sup>Required</sup> <a name="LogStreamNamePrefix" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefix"></a>

```go
func LogStreamNamePrefix() *string
```

- *Type:* *string

---

##### `LogTypes`<sup>Required</sup> <a name="LogTypes" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypes"></a>

```go
func LogTypes() StringListMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringListMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration</a>

---


### DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a>

---


### DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfiguration">CloudwatchLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.managedLoggingConfiguration">ManagedLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.s3LoggingConfiguration">S3LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLoggingConfiguration`<sup>Required</sup> <a name="CloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfiguration"></a>

```go
func CloudwatchLoggingConfiguration() DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference</a>

---

##### `ManagedLoggingConfiguration`<sup>Required</sup> <a name="ManagedLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.managedLoggingConfiguration"></a>

```go
func ManagedLoggingConfiguration() DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference</a>

---

##### `S3LoggingConfiguration`<sup>Required</sup> <a name="S3LoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.s3LoggingConfiguration"></a>

```go
func S3LoggingConfiguration() DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration</a>

---


### DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocation">LogLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `LogLocation`<sup>Required</sup> <a name="LogLocation" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocation"></a>

```go
func LogLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a>

---


### DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.property.additionalConfiguration">AdditionalConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.property.bytesScannedCutoffPerQuery">BytesScannedCutoffPerQuery</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.property.customerContentEncryptionConfiguration">CustomerContentEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.property.enforceWorkGroupConfiguration">EnforceWorkGroupConfiguration</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineConfiguration">EngineConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineVersion">EngineVersion</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.property.executionRole">ExecutionRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.property.managedQueryResultsConfiguration">ManagedQueryResultsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.property.monitoringConfiguration">MonitoringConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabled">PublishCloudwatchMetricsEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.property.requesterPaysEnabled">RequesterPaysEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.property.resultConfiguration">ResultConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalConfiguration`<sup>Required</sup> <a name="AdditionalConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.property.additionalConfiguration"></a>

```go
func AdditionalConfiguration() *string
```

- *Type:* *string

---

##### `BytesScannedCutoffPerQuery`<sup>Required</sup> <a name="BytesScannedCutoffPerQuery" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.property.bytesScannedCutoffPerQuery"></a>

```go
func BytesScannedCutoffPerQuery() *f64
```

- *Type:* *f64

---

##### `CustomerContentEncryptionConfiguration`<sup>Required</sup> <a name="CustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.property.customerContentEncryptionConfiguration"></a>

```go
func CustomerContentEncryptionConfiguration() DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference</a>

---

##### `EnforceWorkGroupConfiguration`<sup>Required</sup> <a name="EnforceWorkGroupConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.property.enforceWorkGroupConfiguration"></a>

```go
func EnforceWorkGroupConfiguration() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EngineConfiguration`<sup>Required</sup> <a name="EngineConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineConfiguration"></a>

```go
func EngineConfiguration() DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference</a>

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineVersion"></a>

```go
func EngineVersion() DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference</a>

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.property.executionRole"></a>

```go
func ExecutionRole() *string
```

- *Type:* *string

---

##### `ManagedQueryResultsConfiguration`<sup>Required</sup> <a name="ManagedQueryResultsConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.property.managedQueryResultsConfiguration"></a>

```go
func ManagedQueryResultsConfiguration() DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference</a>

---

##### `MonitoringConfiguration`<sup>Required</sup> <a name="MonitoringConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.property.monitoringConfiguration"></a>

```go
func MonitoringConfiguration() DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference</a>

---

##### `PublishCloudwatchMetricsEnabled`<sup>Required</sup> <a name="PublishCloudwatchMetricsEnabled" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabled"></a>

```go
func PublishCloudwatchMetricsEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RequesterPaysEnabled`<sup>Required</sup> <a name="RequesterPaysEnabled" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.property.requesterPaysEnabled"></a>

```go
func RequesterPaysEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ResultConfiguration`<sup>Required</sup> <a name="ResultConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.property.resultConfiguration"></a>

```go
func ResultConfiguration() DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAthenaWorkGroupWorkGroupConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfiguration</a>

---


### DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOption">S3AclOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3AclOption`<sup>Required</sup> <a name="S3AclOption" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOption"></a>

```go
func S3AclOption() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration</a>

---


### DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOption">EncryptionOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionOption`<sup>Required</sup> <a name="EncryptionOption" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOption"></a>

```go
func EncryptionOption() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration</a>

---


### DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.aclConfiguration">AclConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.outputLocation">OutputLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AclConfiguration`<sup>Required</sup> <a name="AclConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.aclConfiguration"></a>

```go
func AclConfiguration() DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference</a>

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference</a>

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwner"></a>

```go
func ExpectedBucketOwner() *string
```

- *Type:* *string

---

##### `OutputLocation`<sup>Required</sup> <a name="OutputLocation" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.outputLocation"></a>

```go
func OutputLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfiguration</a>

---


### DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration</a>

---


### DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.get"></a>

```go
func Get(index *f64) DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.properties">Properties</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.properties"></a>

```go
func Properties() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications</a>

---


### DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.additionalConfigs">AdditionalConfigs</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.classifications">Classifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.coordinatorDpuSize">CoordinatorDpuSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.defaultExecutorDpuSize">DefaultExecutorDpuSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.maxConcurrentDpus">MaxConcurrentDpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.sparkProperties">SparkProperties</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalConfigs`<sup>Required</sup> <a name="AdditionalConfigs" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.additionalConfigs"></a>

```go
func AdditionalConfigs() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Classifications`<sup>Required</sup> <a name="Classifications" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.classifications"></a>

```go
func Classifications() DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList</a>

---

##### `CoordinatorDpuSize`<sup>Required</sup> <a name="CoordinatorDpuSize" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.coordinatorDpuSize"></a>

```go
func CoordinatorDpuSize() *f64
```

- *Type:* *f64

---

##### `DefaultExecutorDpuSize`<sup>Required</sup> <a name="DefaultExecutorDpuSize" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.defaultExecutorDpuSize"></a>

```go
func DefaultExecutorDpuSize() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentDpus`<sup>Required</sup> <a name="MaxConcurrentDpus" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.maxConcurrentDpus"></a>

```go
func MaxConcurrentDpus() *f64
```

- *Type:* *f64

---

##### `SparkProperties`<sup>Required</sup> <a name="SparkProperties" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.sparkProperties"></a>

```go
func SparkProperties() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration</a>

---


### DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.effectiveEngineVersion">EffectiveEngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.selectedEngineVersion">SelectedEngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectiveEngineVersion`<sup>Required</sup> <a name="EffectiveEngineVersion" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.effectiveEngineVersion"></a>

```go
func EffectiveEngineVersion() *string
```

- *Type:* *string

---

##### `SelectedEngineVersion`<sup>Required</sup> <a name="SelectedEngineVersion" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.selectedEngineVersion"></a>

```go
func SelectedEngineVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion</a>

---


### DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration</a>

---


### DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration</a>

---


### DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroup">LogGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefix">LogStreamNamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypes">LogTypes</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringListMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroup"></a>

```go
func LogGroup() *string
```

- *Type:* *string

---

##### `LogStreamNamePrefix`<sup>Required</sup> <a name="LogStreamNamePrefix" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefix"></a>

```go
func LogStreamNamePrefix() *string
```

- *Type:* *string

---

##### `LogTypes`<sup>Required</sup> <a name="LogTypes" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypes"></a>

```go
func LogTypes() StringListMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringListMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration</a>

---


### DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration</a>

---


### DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfiguration">CloudwatchLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.managedLoggingConfiguration">ManagedLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.s3LoggingConfiguration">S3LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLoggingConfiguration`<sup>Required</sup> <a name="CloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfiguration"></a>

```go
func CloudwatchLoggingConfiguration() DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference</a>

---

##### `ManagedLoggingConfiguration`<sup>Required</sup> <a name="ManagedLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.managedLoggingConfiguration"></a>

```go
func ManagedLoggingConfiguration() DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference</a>

---

##### `S3LoggingConfiguration`<sup>Required</sup> <a name="S3LoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.s3LoggingConfiguration"></a>

```go
func S3LoggingConfiguration() DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration</a>

---


### DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocation">LogLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `LogLocation`<sup>Required</sup> <a name="LogLocation" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocation"></a>

```go
func LogLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration</a>

---


### DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.additionalConfiguration">AdditionalConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.bytesScannedCutoffPerQuery">BytesScannedCutoffPerQuery</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.customerContentEncryptionConfiguration">CustomerContentEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.enforceWorkGroupConfiguration">EnforceWorkGroupConfiguration</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineConfiguration">EngineConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineVersion">EngineVersion</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.executionRole">ExecutionRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.managedQueryResultsConfiguration">ManagedQueryResultsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.monitoringConfiguration">MonitoringConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.publishCloudwatchMetricsEnabled">PublishCloudwatchMetricsEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeBytesScannedCutoffPerQuery">RemoveBytesScannedCutoffPerQuery</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeCustomerContentEncryptionConfiguration">RemoveCustomerContentEncryptionConfiguration</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.requesterPaysEnabled">RequesterPaysEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.resultConfigurationUpdates">ResultConfigurationUpdates</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdates">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalConfiguration`<sup>Required</sup> <a name="AdditionalConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.additionalConfiguration"></a>

```go
func AdditionalConfiguration() *string
```

- *Type:* *string

---

##### `BytesScannedCutoffPerQuery`<sup>Required</sup> <a name="BytesScannedCutoffPerQuery" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.bytesScannedCutoffPerQuery"></a>

```go
func BytesScannedCutoffPerQuery() *f64
```

- *Type:* *f64

---

##### `CustomerContentEncryptionConfiguration`<sup>Required</sup> <a name="CustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.customerContentEncryptionConfiguration"></a>

```go
func CustomerContentEncryptionConfiguration() DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference</a>

---

##### `EnforceWorkGroupConfiguration`<sup>Required</sup> <a name="EnforceWorkGroupConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.enforceWorkGroupConfiguration"></a>

```go
func EnforceWorkGroupConfiguration() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EngineConfiguration`<sup>Required</sup> <a name="EngineConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineConfiguration"></a>

```go
func EngineConfiguration() DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference</a>

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineVersion"></a>

```go
func EngineVersion() DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference</a>

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.executionRole"></a>

```go
func ExecutionRole() *string
```

- *Type:* *string

---

##### `ManagedQueryResultsConfiguration`<sup>Required</sup> <a name="ManagedQueryResultsConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.managedQueryResultsConfiguration"></a>

```go
func ManagedQueryResultsConfiguration() DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference</a>

---

##### `MonitoringConfiguration`<sup>Required</sup> <a name="MonitoringConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.monitoringConfiguration"></a>

```go
func MonitoringConfiguration() DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference</a>

---

##### `PublishCloudwatchMetricsEnabled`<sup>Required</sup> <a name="PublishCloudwatchMetricsEnabled" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.publishCloudwatchMetricsEnabled"></a>

```go
func PublishCloudwatchMetricsEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RemoveBytesScannedCutoffPerQuery`<sup>Required</sup> <a name="RemoveBytesScannedCutoffPerQuery" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeBytesScannedCutoffPerQuery"></a>

```go
func RemoveBytesScannedCutoffPerQuery() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RemoveCustomerContentEncryptionConfiguration`<sup>Required</sup> <a name="RemoveCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeCustomerContentEncryptionConfiguration"></a>

```go
func RemoveCustomerContentEncryptionConfiguration() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RequesterPaysEnabled`<sup>Required</sup> <a name="RequesterPaysEnabled" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.requesterPaysEnabled"></a>

```go
func RequesterPaysEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ResultConfigurationUpdates`<sup>Required</sup> <a name="ResultConfigurationUpdates" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.resultConfigurationUpdates"></a>

```go
func ResultConfigurationUpdates() DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdates
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdates">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdates</a>

---


### DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.s3AclOption">S3AclOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3AclOption`<sup>Required</sup> <a name="S3AclOption" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.s3AclOption"></a>

```go
func S3AclOption() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration</a>

---


### DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.encryptionOption">EncryptionOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionOption`<sup>Required</sup> <a name="EncryptionOption" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.encryptionOption"></a>

```go
func EncryptionOption() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration</a>

---


### DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference <a name="DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccathenaworkgroup"

dataawsccathenaworkgroup.NewDataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.aclConfiguration">AclConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.outputLocation">OutputLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeAclConfiguration">RemoveAclConfiguration</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeEncryptionConfiguration">RemoveEncryptionConfiguration</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeExpectedBucketOwner">RemoveExpectedBucketOwner</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeOutputLocation">RemoveOutputLocation</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AclConfiguration`<sup>Required</sup> <a name="AclConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.aclConfiguration"></a>

```go
func AclConfiguration() DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference</a>

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference</a>

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.expectedBucketOwner"></a>

```go
func ExpectedBucketOwner() *string
```

- *Type:* *string

---

##### `OutputLocation`<sup>Required</sup> <a name="OutputLocation" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.outputLocation"></a>

```go
func OutputLocation() *string
```

- *Type:* *string

---

##### `RemoveAclConfiguration`<sup>Required</sup> <a name="RemoveAclConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeAclConfiguration"></a>

```go
func RemoveAclConfiguration() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RemoveEncryptionConfiguration`<sup>Required</sup> <a name="RemoveEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeEncryptionConfiguration"></a>

```go
func RemoveEncryptionConfiguration() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RemoveExpectedBucketOwner`<sup>Required</sup> <a name="RemoveExpectedBucketOwner" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeExpectedBucketOwner"></a>

```go
func RemoveExpectedBucketOwner() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RemoveOutputLocation`<sup>Required</sup> <a name="RemoveOutputLocation" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeOutputLocation"></a>

```go
func RemoveOutputLocation() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaWorkGroup.DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates">DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates</a>

---



