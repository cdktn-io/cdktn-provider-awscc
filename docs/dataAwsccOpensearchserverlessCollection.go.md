# `dataAwsccOpensearchserverlessCollection` Submodule <a name="`dataAwsccOpensearchserverlessCollection` Submodule" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccOpensearchserverlessCollection <a name="DataAwsccOpensearchserverlessCollection" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/opensearchserverless_collection awscc_opensearchserverless_collection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserverlesscollection"

dataawsccopensearchserverlesscollection.NewDataAwsccOpensearchserverlessCollection(scope Construct, id *string, config DataAwsccOpensearchserverlessCollectionConfig) DataAwsccOpensearchserverlessCollection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig">DataAwsccOpensearchserverlessCollectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig">DataAwsccOpensearchserverlessCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccOpensearchserverlessCollection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserverlesscollection"

dataawsccopensearchserverlesscollection.DataAwsccOpensearchserverlessCollection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserverlesscollection"

dataawsccopensearchserverlesscollection.DataAwsccOpensearchserverlessCollection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserverlesscollection"

dataawsccopensearchserverlesscollection.DataAwsccOpensearchserverlessCollection_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserverlesscollection"

dataawsccopensearchserverlesscollection.DataAwsccOpensearchserverlessCollection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccOpensearchserverlessCollection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccOpensearchserverlessCollection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccOpensearchserverlessCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/opensearchserverless_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccOpensearchserverlessCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.collectionEndpoint">CollectionEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.collectionGroupName">CollectionGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.collectionId">CollectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.dashboardEndpoint">DashboardEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.deletionProtection">DeletionProtection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference">DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.fipsEndpoints">FipsEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference">DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.standbyReplicas">StandbyReplicas</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList">DataAwsccOpensearchserverlessCollectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.vectorOptions">VectorOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference">DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CollectionEndpoint`<sup>Required</sup> <a name="CollectionEndpoint" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.collectionEndpoint"></a>

```go
func CollectionEndpoint() *string
```

- *Type:* *string

---

##### `CollectionGroupName`<sup>Required</sup> <a name="CollectionGroupName" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.collectionGroupName"></a>

```go
func CollectionGroupName() *string
```

- *Type:* *string

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.collectionId"></a>

```go
func CollectionId() *string
```

- *Type:* *string

---

##### `DashboardEndpoint`<sup>Required</sup> <a name="DashboardEndpoint" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.dashboardEndpoint"></a>

```go
func DashboardEndpoint() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.deletionProtection"></a>

```go
func DeletionProtection() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.encryptionConfig"></a>

```go
func EncryptionConfig() DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference">DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference</a>

---

##### `FipsEndpoints`<sup>Required</sup> <a name="FipsEndpoints" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.fipsEndpoints"></a>

```go
func FipsEndpoints() DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference">DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference</a>

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StandbyReplicas`<sup>Required</sup> <a name="StandbyReplicas" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.standbyReplicas"></a>

```go
func StandbyReplicas() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.tags"></a>

```go
func Tags() DataAwsccOpensearchserverlessCollectionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList">DataAwsccOpensearchserverlessCollectionTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VectorOptions`<sup>Required</sup> <a name="VectorOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.vectorOptions"></a>

```go
func VectorOptions() DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference">DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccOpensearchserverlessCollectionConfig <a name="DataAwsccOpensearchserverlessCollectionConfig" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserverlesscollection"

&dataawsccopensearchserverlesscollection.DataAwsccOpensearchserverlessCollectionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/opensearchserverless_collection#id DataAwsccOpensearchserverlessCollection#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccOpensearchserverlessCollectionEncryptionConfig <a name="DataAwsccOpensearchserverlessCollectionEncryptionConfig" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserverlesscollection"

&dataawsccopensearchserverlesscollection.DataAwsccOpensearchserverlessCollectionEncryptionConfig {

}
```


### DataAwsccOpensearchserverlessCollectionFipsEndpoints <a name="DataAwsccOpensearchserverlessCollectionFipsEndpoints" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpoints.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserverlesscollection"

&dataawsccopensearchserverlesscollection.DataAwsccOpensearchserverlessCollectionFipsEndpoints {

}
```


### DataAwsccOpensearchserverlessCollectionTags <a name="DataAwsccOpensearchserverlessCollectionTags" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserverlesscollection"

&dataawsccopensearchserverlesscollection.DataAwsccOpensearchserverlessCollectionTags {

}
```


### DataAwsccOpensearchserverlessCollectionVectorOptions <a name="DataAwsccOpensearchserverlessCollectionVectorOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserverlesscollection"

&dataawsccopensearchserverlesscollection.DataAwsccOpensearchserverlessCollectionVectorOptions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference <a name="DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserverlesscollection"

dataawsccopensearchserverlesscollection.NewDataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.property.awsOwnedKey">AwsOwnedKey</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfig">DataAwsccOpensearchserverlessCollectionEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsOwnedKey`<sup>Required</sup> <a name="AwsOwnedKey" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.property.awsOwnedKey"></a>

```go
func AwsOwnedKey() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccOpensearchserverlessCollectionEncryptionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfig">DataAwsccOpensearchserverlessCollectionEncryptionConfig</a>

---


### DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference <a name="DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserverlesscollection"

dataawsccopensearchserverlesscollection.NewDataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.property.collectionEndpoint">CollectionEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.property.dashboardEndpoint">DashboardEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpoints">DataAwsccOpensearchserverlessCollectionFipsEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CollectionEndpoint`<sup>Required</sup> <a name="CollectionEndpoint" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.property.collectionEndpoint"></a>

```go
func CollectionEndpoint() *string
```

- *Type:* *string

---

##### `DashboardEndpoint`<sup>Required</sup> <a name="DashboardEndpoint" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.property.dashboardEndpoint"></a>

```go
func DashboardEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccOpensearchserverlessCollectionFipsEndpoints
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpoints">DataAwsccOpensearchserverlessCollectionFipsEndpoints</a>

---


### DataAwsccOpensearchserverlessCollectionTagsList <a name="DataAwsccOpensearchserverlessCollectionTagsList" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserverlesscollection"

dataawsccopensearchserverlesscollection.NewDataAwsccOpensearchserverlessCollectionTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccOpensearchserverlessCollectionTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.get"></a>

```go
func Get(index *f64) DataAwsccOpensearchserverlessCollectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccOpensearchserverlessCollectionTagsOutputReference <a name="DataAwsccOpensearchserverlessCollectionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserverlesscollection"

dataawsccopensearchserverlesscollection.NewDataAwsccOpensearchserverlessCollectionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccOpensearchserverlessCollectionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTags">DataAwsccOpensearchserverlessCollectionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccOpensearchserverlessCollectionTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTags">DataAwsccOpensearchserverlessCollectionTags</a>

---


### DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference <a name="DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserverlesscollection"

dataawsccopensearchserverlesscollection.NewDataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.property.serverlessVectorAcceleration">ServerlessVectorAcceleration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptions">DataAwsccOpensearchserverlessCollectionVectorOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServerlessVectorAcceleration`<sup>Required</sup> <a name="ServerlessVectorAcceleration" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.property.serverlessVectorAcceleration"></a>

```go
func ServerlessVectorAcceleration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccOpensearchserverlessCollectionVectorOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptions">DataAwsccOpensearchserverlessCollectionVectorOptions</a>

---



