# `dataAwsccSsmincidentsReplicationSet` Submodule <a name="`dataAwsccSsmincidentsReplicationSet` Submodule" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSsmincidentsReplicationSet <a name="DataAwsccSsmincidentsReplicationSet" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ssmincidents_replication_set awscc_ssmincidents_replication_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmincidentsreplicationset"

dataawsccssmincidentsreplicationset.NewDataAwsccSsmincidentsReplicationSet(scope Construct, id *string, config DataAwsccSsmincidentsReplicationSetConfig) DataAwsccSsmincidentsReplicationSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig">DataAwsccSsmincidentsReplicationSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig">DataAwsccSsmincidentsReplicationSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSsmincidentsReplicationSet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmincidentsreplicationset"

dataawsccssmincidentsreplicationset.DataAwsccSsmincidentsReplicationSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmincidentsreplicationset"

dataawsccssmincidentsreplicationset.DataAwsccSsmincidentsReplicationSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmincidentsreplicationset"

dataawsccssmincidentsreplicationset.DataAwsccSsmincidentsReplicationSet_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmincidentsreplicationset"

dataawsccssmincidentsreplicationset.DataAwsccSsmincidentsReplicationSet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccSsmincidentsReplicationSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccSsmincidentsReplicationSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccSsmincidentsReplicationSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ssmincidents_replication_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSsmincidentsReplicationSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.deletionProtected">DeletionProtected</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.regions">Regions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList">DataAwsccSsmincidentsReplicationSetRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList">DataAwsccSsmincidentsReplicationSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DeletionProtected`<sup>Required</sup> <a name="DeletionProtected" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.deletionProtected"></a>

```go
func DeletionProtected() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.regions"></a>

```go
func Regions() DataAwsccSsmincidentsReplicationSetRegionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList">DataAwsccSsmincidentsReplicationSetRegionsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.tags"></a>

```go
func Tags() DataAwsccSsmincidentsReplicationSetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList">DataAwsccSsmincidentsReplicationSetTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSsmincidentsReplicationSetConfig <a name="DataAwsccSsmincidentsReplicationSetConfig" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmincidentsreplicationset"

&dataawsccssmincidentsreplicationset.DataAwsccSsmincidentsReplicationSetConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ssmincidents_replication_set#id DataAwsccSsmincidentsReplicationSet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSsmincidentsReplicationSetRegions <a name="DataAwsccSsmincidentsReplicationSetRegions" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmincidentsreplicationset"

&dataawsccssmincidentsreplicationset.DataAwsccSsmincidentsReplicationSetRegions {

}
```


### DataAwsccSsmincidentsReplicationSetRegionsRegionConfiguration <a name="DataAwsccSsmincidentsReplicationSetRegionsRegionConfiguration" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmincidentsreplicationset"

&dataawsccssmincidentsreplicationset.DataAwsccSsmincidentsReplicationSetRegionsRegionConfiguration {

}
```


### DataAwsccSsmincidentsReplicationSetTags <a name="DataAwsccSsmincidentsReplicationSetTags" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmincidentsreplicationset"

&dataawsccssmincidentsreplicationset.DataAwsccSsmincidentsReplicationSetTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSsmincidentsReplicationSetRegionsList <a name="DataAwsccSsmincidentsReplicationSetRegionsList" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmincidentsreplicationset"

dataawsccssmincidentsreplicationset.NewDataAwsccSsmincidentsReplicationSetRegionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSsmincidentsReplicationSetRegionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.get"></a>

```go
func Get(index *f64) DataAwsccSsmincidentsReplicationSetRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSsmincidentsReplicationSetRegionsOutputReference <a name="DataAwsccSsmincidentsReplicationSetRegionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmincidentsreplicationset"

dataawsccssmincidentsreplicationset.NewDataAwsccSsmincidentsReplicationSetRegionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSsmincidentsReplicationSetRegionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.property.regionConfiguration">RegionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference">DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.property.regionName">RegionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegions">DataAwsccSsmincidentsReplicationSetRegions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegionConfiguration`<sup>Required</sup> <a name="RegionConfiguration" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.property.regionConfiguration"></a>

```go
func RegionConfiguration() DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference">DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference</a>

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.property.regionName"></a>

```go
func RegionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSsmincidentsReplicationSetRegions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegions">DataAwsccSsmincidentsReplicationSetRegions</a>

---


### DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference <a name="DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmincidentsreplicationset"

dataawsccssmincidentsreplicationset.NewDataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.sseKmsKeyId">SseKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfiguration">DataAwsccSsmincidentsReplicationSetRegionsRegionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SseKmsKeyId`<sup>Required</sup> <a name="SseKmsKeyId" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.sseKmsKeyId"></a>

```go
func SseKmsKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSsmincidentsReplicationSetRegionsRegionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfiguration">DataAwsccSsmincidentsReplicationSetRegionsRegionConfiguration</a>

---


### DataAwsccSsmincidentsReplicationSetTagsList <a name="DataAwsccSsmincidentsReplicationSetTagsList" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmincidentsreplicationset"

dataawsccssmincidentsreplicationset.NewDataAwsccSsmincidentsReplicationSetTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSsmincidentsReplicationSetTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.get"></a>

```go
func Get(index *f64) DataAwsccSsmincidentsReplicationSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSsmincidentsReplicationSetTagsOutputReference <a name="DataAwsccSsmincidentsReplicationSetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmincidentsreplicationset"

dataawsccssmincidentsreplicationset.NewDataAwsccSsmincidentsReplicationSetTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSsmincidentsReplicationSetTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTags">DataAwsccSsmincidentsReplicationSetTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSsmincidentsReplicationSetTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTags">DataAwsccSsmincidentsReplicationSetTags</a>

---



