# `dataAwsccGuarddutyFilter` Submodule <a name="`dataAwsccGuarddutyFilter` Submodule" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGuarddutyFilter <a name="DataAwsccGuarddutyFilter" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/guardduty_filter awscc_guardduty_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccguarddutyfilter"

dataawsccguarddutyfilter.NewDataAwsccGuarddutyFilter(scope Construct, id *string, config DataAwsccGuarddutyFilterConfig) DataAwsccGuarddutyFilter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig">DataAwsccGuarddutyFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig">DataAwsccGuarddutyFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGuarddutyFilter resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccguarddutyfilter"

dataawsccguarddutyfilter.DataAwsccGuarddutyFilter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccguarddutyfilter"

dataawsccguarddutyfilter.DataAwsccGuarddutyFilter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccguarddutyfilter"

dataawsccguarddutyfilter.DataAwsccGuarddutyFilter_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccguarddutyfilter"

dataawsccguarddutyfilter.DataAwsccGuarddutyFilter_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccGuarddutyFilter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccGuarddutyFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccGuarddutyFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/guardduty_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGuarddutyFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.detectorId">DetectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.findingCriteria">FindingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference">DataAwsccGuarddutyFilterFindingCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.rank">Rank</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList">DataAwsccGuarddutyFilterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DetectorId`<sup>Required</sup> <a name="DetectorId" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.detectorId"></a>

```go
func DetectorId() *string
```

- *Type:* *string

---

##### `FindingCriteria`<sup>Required</sup> <a name="FindingCriteria" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.findingCriteria"></a>

```go
func FindingCriteria() DataAwsccGuarddutyFilterFindingCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference">DataAwsccGuarddutyFilterFindingCriteriaOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Rank`<sup>Required</sup> <a name="Rank" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.rank"></a>

```go
func Rank() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.tags"></a>

```go
func Tags() DataAwsccGuarddutyFilterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList">DataAwsccGuarddutyFilterTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGuarddutyFilterConfig <a name="DataAwsccGuarddutyFilterConfig" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccguarddutyfilter"

&dataawsccguarddutyfilter.DataAwsccGuarddutyFilterConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/guardduty_filter#id DataAwsccGuarddutyFilter#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGuarddutyFilterFindingCriteria <a name="DataAwsccGuarddutyFilterFindingCriteria" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteria.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccguarddutyfilter"

&dataawsccguarddutyfilter.DataAwsccGuarddutyFilterFindingCriteria {

}
```


### DataAwsccGuarddutyFilterFindingCriteriaCriterion <a name="DataAwsccGuarddutyFilterFindingCriteriaCriterion" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccguarddutyfilter"

&dataawsccguarddutyfilter.DataAwsccGuarddutyFilterFindingCriteriaCriterion {

}
```


### DataAwsccGuarddutyFilterTags <a name="DataAwsccGuarddutyFilterTags" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccguarddutyfilter"

&dataawsccguarddutyfilter.DataAwsccGuarddutyFilterTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGuarddutyFilterFindingCriteriaCriterionMap <a name="DataAwsccGuarddutyFilterFindingCriteriaCriterionMap" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccguarddutyfilter"

dataawsccguarddutyfilter.NewDataAwsccGuarddutyFilterFindingCriteriaCriterionMap(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGuarddutyFilterFindingCriteriaCriterionMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.get"></a>

```go
func Get(key *string) DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference <a name="DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccguarddutyfilter"

dataawsccguarddutyfilter.NewDataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.eq">Eq</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.equalTo">EqualTo</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThan">GreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThanOrEqual">GreaterThanOrEqual</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.gt">Gt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.gte">Gte</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThan">LessThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThanOrEqual">LessThanOrEqual</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.lt">Lt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.lte">Lte</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.neq">Neq</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.notEquals">NotEquals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterion">DataAwsccGuarddutyFilterFindingCriteriaCriterion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Eq`<sup>Required</sup> <a name="Eq" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.eq"></a>

```go
func Eq() *[]*string
```

- *Type:* *[]*string

---

##### `EqualTo`<sup>Required</sup> <a name="EqualTo" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.equalTo"></a>

```go
func EqualTo() *[]*string
```

- *Type:* *[]*string

---

##### `GreaterThan`<sup>Required</sup> <a name="GreaterThan" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThan"></a>

```go
func GreaterThan() *f64
```

- *Type:* *f64

---

##### `GreaterThanOrEqual`<sup>Required</sup> <a name="GreaterThanOrEqual" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThanOrEqual"></a>

```go
func GreaterThanOrEqual() *f64
```

- *Type:* *f64

---

##### `Gt`<sup>Required</sup> <a name="Gt" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.gt"></a>

```go
func Gt() *f64
```

- *Type:* *f64

---

##### `Gte`<sup>Required</sup> <a name="Gte" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.gte"></a>

```go
func Gte() *f64
```

- *Type:* *f64

---

##### `LessThan`<sup>Required</sup> <a name="LessThan" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThan"></a>

```go
func LessThan() *f64
```

- *Type:* *f64

---

##### `LessThanOrEqual`<sup>Required</sup> <a name="LessThanOrEqual" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThanOrEqual"></a>

```go
func LessThanOrEqual() *f64
```

- *Type:* *f64

---

##### `Lt`<sup>Required</sup> <a name="Lt" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.lt"></a>

```go
func Lt() *f64
```

- *Type:* *f64

---

##### `Lte`<sup>Required</sup> <a name="Lte" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.lte"></a>

```go
func Lte() *f64
```

- *Type:* *f64

---

##### `Neq`<sup>Required</sup> <a name="Neq" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.neq"></a>

```go
func Neq() *[]*string
```

- *Type:* *[]*string

---

##### `NotEquals`<sup>Required</sup> <a name="NotEquals" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.notEquals"></a>

```go
func NotEquals() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGuarddutyFilterFindingCriteriaCriterion
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterion">DataAwsccGuarddutyFilterFindingCriteriaCriterion</a>

---


### DataAwsccGuarddutyFilterFindingCriteriaOutputReference <a name="DataAwsccGuarddutyFilterFindingCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccguarddutyfilter"

dataawsccguarddutyfilter.NewDataAwsccGuarddutyFilterFindingCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGuarddutyFilterFindingCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.property.criterion">Criterion</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap">DataAwsccGuarddutyFilterFindingCriteriaCriterionMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteria">DataAwsccGuarddutyFilterFindingCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Criterion`<sup>Required</sup> <a name="Criterion" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.property.criterion"></a>

```go
func Criterion() DataAwsccGuarddutyFilterFindingCriteriaCriterionMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap">DataAwsccGuarddutyFilterFindingCriteriaCriterionMap</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGuarddutyFilterFindingCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteria">DataAwsccGuarddutyFilterFindingCriteria</a>

---


### DataAwsccGuarddutyFilterTagsList <a name="DataAwsccGuarddutyFilterTagsList" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccguarddutyfilter"

dataawsccguarddutyfilter.NewDataAwsccGuarddutyFilterTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGuarddutyFilterTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.get"></a>

```go
func Get(index *f64) DataAwsccGuarddutyFilterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGuarddutyFilterTagsOutputReference <a name="DataAwsccGuarddutyFilterTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccguarddutyfilter"

dataawsccguarddutyfilter.NewDataAwsccGuarddutyFilterTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGuarddutyFilterTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTags">DataAwsccGuarddutyFilterTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGuarddutyFilterTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTags">DataAwsccGuarddutyFilterTags</a>

---



