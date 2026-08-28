# `dataAwsccHealthlakeFhirDatastore` Submodule <a name="`dataAwsccHealthlakeFhirDatastore` Submodule" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccHealthlakeFhirDatastore <a name="DataAwsccHealthlakeFhirDatastore" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/healthlake_fhir_datastore awscc_healthlake_fhir_datastore}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakefhirdatastore"

dataawscchealthlakefhirdatastore.NewDataAwsccHealthlakeFhirDatastore(scope Construct, id *string, config DataAwsccHealthlakeFhirDatastoreConfig) DataAwsccHealthlakeFhirDatastore
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig">DataAwsccHealthlakeFhirDatastoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig">DataAwsccHealthlakeFhirDatastoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccHealthlakeFhirDatastore resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakefhirdatastore"

dataawscchealthlakefhirdatastore.DataAwsccHealthlakeFhirDatastore_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakefhirdatastore"

dataawscchealthlakefhirdatastore.DataAwsccHealthlakeFhirDatastore_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakefhirdatastore"

dataawscchealthlakefhirdatastore.DataAwsccHealthlakeFhirDatastore_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakefhirdatastore"

dataawscchealthlakefhirdatastore.DataAwsccHealthlakeFhirDatastore_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccHealthlakeFhirDatastore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccHealthlakeFhirDatastore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccHealthlakeFhirDatastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/healthlake_fhir_datastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccHealthlakeFhirDatastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.createdAt">CreatedAt</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference">DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreArn">DatastoreArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreEndpoint">DatastoreEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreId">DatastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreName">DatastoreName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreStatus">DatastoreStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreTypeVersion">DatastoreTypeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.identityProviderConfiguration">IdentityProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference">DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.preloadDataConfig">PreloadDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference">DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.sseConfiguration">SseConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference">DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList">DataAwsccHealthlakeFhirDatastoreTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.createdAt"></a>

```go
func CreatedAt() DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference">DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference</a>

---

##### `DatastoreArn`<sup>Required</sup> <a name="DatastoreArn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreArn"></a>

```go
func DatastoreArn() *string
```

- *Type:* *string

---

##### `DatastoreEndpoint`<sup>Required</sup> <a name="DatastoreEndpoint" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreEndpoint"></a>

```go
func DatastoreEndpoint() *string
```

- *Type:* *string

---

##### `DatastoreId`<sup>Required</sup> <a name="DatastoreId" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreId"></a>

```go
func DatastoreId() *string
```

- *Type:* *string

---

##### `DatastoreName`<sup>Required</sup> <a name="DatastoreName" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreName"></a>

```go
func DatastoreName() *string
```

- *Type:* *string

---

##### `DatastoreStatus`<sup>Required</sup> <a name="DatastoreStatus" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreStatus"></a>

```go
func DatastoreStatus() *string
```

- *Type:* *string

---

##### `DatastoreTypeVersion`<sup>Required</sup> <a name="DatastoreTypeVersion" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreTypeVersion"></a>

```go
func DatastoreTypeVersion() *string
```

- *Type:* *string

---

##### `IdentityProviderConfiguration`<sup>Required</sup> <a name="IdentityProviderConfiguration" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.identityProviderConfiguration"></a>

```go
func IdentityProviderConfiguration() DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference">DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference</a>

---

##### `PreloadDataConfig`<sup>Required</sup> <a name="PreloadDataConfig" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.preloadDataConfig"></a>

```go
func PreloadDataConfig() DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference">DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference</a>

---

##### `SseConfiguration`<sup>Required</sup> <a name="SseConfiguration" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.sseConfiguration"></a>

```go
func SseConfiguration() DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference">DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.tags"></a>

```go
func Tags() DataAwsccHealthlakeFhirDatastoreTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList">DataAwsccHealthlakeFhirDatastoreTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccHealthlakeFhirDatastoreConfig <a name="DataAwsccHealthlakeFhirDatastoreConfig" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakefhirdatastore"

&dataawscchealthlakefhirdatastore.DataAwsccHealthlakeFhirDatastoreConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/healthlake_fhir_datastore#id DataAwsccHealthlakeFhirDatastore#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccHealthlakeFhirDatastoreCreatedAt <a name="DataAwsccHealthlakeFhirDatastoreCreatedAt" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAt.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakefhirdatastore"

&dataawscchealthlakefhirdatastore.DataAwsccHealthlakeFhirDatastoreCreatedAt {

}
```


### DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration <a name="DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakefhirdatastore"

&dataawscchealthlakefhirdatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration {

}
```


### DataAwsccHealthlakeFhirDatastorePreloadDataConfig <a name="DataAwsccHealthlakeFhirDatastorePreloadDataConfig" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakefhirdatastore"

&dataawscchealthlakefhirdatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfig {

}
```


### DataAwsccHealthlakeFhirDatastoreSseConfiguration <a name="DataAwsccHealthlakeFhirDatastoreSseConfiguration" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakefhirdatastore"

&dataawscchealthlakefhirdatastore.DataAwsccHealthlakeFhirDatastoreSseConfiguration {

}
```


### DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig <a name="DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakefhirdatastore"

&dataawscchealthlakefhirdatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig {

}
```


### DataAwsccHealthlakeFhirDatastoreTags <a name="DataAwsccHealthlakeFhirDatastoreTags" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakefhirdatastore"

&dataawscchealthlakefhirdatastore.DataAwsccHealthlakeFhirDatastoreTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference <a name="DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakefhirdatastore"

dataawscchealthlakefhirdatastore.NewDataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.seconds">Seconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAt">DataAwsccHealthlakeFhirDatastoreCreatedAt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.seconds"></a>

```go
func Seconds() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccHealthlakeFhirDatastoreCreatedAt
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAt">DataAwsccHealthlakeFhirDatastoreCreatedAt</a>

---


### DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference <a name="DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakefhirdatastore"

dataawscchealthlakefhirdatastore.NewDataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.authorizationStrategy">AuthorizationStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fineGrainedAuthorizationEnabled">FineGrainedAuthorizationEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.idpLambdaArn">IdpLambdaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration">DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationStrategy`<sup>Required</sup> <a name="AuthorizationStrategy" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.authorizationStrategy"></a>

```go
func AuthorizationStrategy() *string
```

- *Type:* *string

---

##### `FineGrainedAuthorizationEnabled`<sup>Required</sup> <a name="FineGrainedAuthorizationEnabled" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fineGrainedAuthorizationEnabled"></a>

```go
func FineGrainedAuthorizationEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IdpLambdaArn`<sup>Required</sup> <a name="IdpLambdaArn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.idpLambdaArn"></a>

```go
func IdpLambdaArn() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration">DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration</a>

---


### DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference <a name="DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakefhirdatastore"

dataawscchealthlakefhirdatastore.NewDataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.preloadDataType">PreloadDataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfig">DataAwsccHealthlakeFhirDatastorePreloadDataConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PreloadDataType`<sup>Required</sup> <a name="PreloadDataType" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.preloadDataType"></a>

```go
func PreloadDataType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccHealthlakeFhirDatastorePreloadDataConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfig">DataAwsccHealthlakeFhirDatastorePreloadDataConfig</a>

---


### DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference <a name="DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakefhirdatastore"

dataawscchealthlakefhirdatastore.NewDataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.cmkType">CmkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CmkType`<sup>Required</sup> <a name="CmkType" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.cmkType"></a>

```go
func CmkType() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a>

---


### DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference <a name="DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakefhirdatastore"

dataawscchealthlakefhirdatastore.NewDataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.kmsEncryptionConfig">KmsEncryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference">DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfiguration">DataAwsccHealthlakeFhirDatastoreSseConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsEncryptionConfig`<sup>Required</sup> <a name="KmsEncryptionConfig" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.kmsEncryptionConfig"></a>

```go
func KmsEncryptionConfig() DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference">DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccHealthlakeFhirDatastoreSseConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfiguration">DataAwsccHealthlakeFhirDatastoreSseConfiguration</a>

---


### DataAwsccHealthlakeFhirDatastoreTagsList <a name="DataAwsccHealthlakeFhirDatastoreTagsList" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakefhirdatastore"

dataawscchealthlakefhirdatastore.NewDataAwsccHealthlakeFhirDatastoreTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccHealthlakeFhirDatastoreTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.get"></a>

```go
func Get(index *f64) DataAwsccHealthlakeFhirDatastoreTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccHealthlakeFhirDatastoreTagsOutputReference <a name="DataAwsccHealthlakeFhirDatastoreTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakefhirdatastore"

dataawscchealthlakefhirdatastore.NewDataAwsccHealthlakeFhirDatastoreTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccHealthlakeFhirDatastoreTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTags">DataAwsccHealthlakeFhirDatastoreTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccHealthlakeFhirDatastoreTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTags">DataAwsccHealthlakeFhirDatastoreTags</a>

---



