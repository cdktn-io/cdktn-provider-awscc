# `dataAwsccElasticacheReplicationGroup` Submodule <a name="`dataAwsccElasticacheReplicationGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccElasticacheReplicationGroup <a name="DataAwsccElasticacheReplicationGroup" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/elasticache_replication_group awscc_elasticache_replication_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticachereplicationgroup"

dataawsccelasticachereplicationgroup.NewDataAwsccElasticacheReplicationGroup(scope Construct, id *string, config DataAwsccElasticacheReplicationGroupConfig) DataAwsccElasticacheReplicationGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig">DataAwsccElasticacheReplicationGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig">DataAwsccElasticacheReplicationGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccElasticacheReplicationGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticachereplicationgroup"

dataawsccelasticachereplicationgroup.DataAwsccElasticacheReplicationGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticachereplicationgroup"

dataawsccelasticachereplicationgroup.DataAwsccElasticacheReplicationGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticachereplicationgroup"

dataawsccelasticachereplicationgroup.DataAwsccElasticacheReplicationGroup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticachereplicationgroup"

dataawsccelasticachereplicationgroup.DataAwsccElasticacheReplicationGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccElasticacheReplicationGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccElasticacheReplicationGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccElasticacheReplicationGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/elasticache_replication_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccElasticacheReplicationGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.atRestEncryptionEnabled">AtRestEncryptionEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.authToken">AuthToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.automaticFailoverEnabled">AutomaticFailoverEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.cacheNodeType">CacheNodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.cacheParameterGroupName">CacheParameterGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.cacheSecurityGroupNames">CacheSecurityGroupNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.cacheSubnetGroupName">CacheSubnetGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.clusterMode">ClusterMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.configurationEndPoint">ConfigurationEndPoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference">DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.dataTieringEnabled">DataTieringEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.durability">Durability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.effectiveDurability">EffectiveDurability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.globalReplicationGroupId">GlobalReplicationGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.ipDiscovery">IpDiscovery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.logDeliveryConfigurations">LogDeliveryConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.multiAzEnabled">MultiAzEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.networkType">NetworkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.nodeGroupConfiguration">NodeGroupConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList">DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.notificationTopicArn">NotificationTopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.numCacheClusters">NumCacheClusters</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.numNodeGroups">NumNodeGroups</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.preferredCacheClusterAZs">PreferredCacheClusterAZs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.primaryClusterId">PrimaryClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.primaryEndPoint">PrimaryEndPoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference">DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.readEndPoint">ReadEndPoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference">DataAwsccElasticacheReplicationGroupReadEndPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.readerEndPoint">ReaderEndPoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference">DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.replicasPerNodeGroup">ReplicasPerNodeGroup</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.replicationGroupDescription">ReplicationGroupDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.replicationGroupId">ReplicationGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.snapshotArns">SnapshotArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.snapshotName">SnapshotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.snapshotRetentionLimit">SnapshotRetentionLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.snapshottingClusterId">SnapshottingClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.snapshotWindow">SnapshotWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList">DataAwsccElasticacheReplicationGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.transitEncryptionEnabled">TransitEncryptionEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.transitEncryptionMode">TransitEncryptionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.userGroupIds">UserGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AtRestEncryptionEnabled`<sup>Required</sup> <a name="AtRestEncryptionEnabled" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.atRestEncryptionEnabled"></a>

```go
func AtRestEncryptionEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `AuthToken`<sup>Required</sup> <a name="AuthToken" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.authToken"></a>

```go
func AuthToken() *string
```

- *Type:* *string

---

##### `AutomaticFailoverEnabled`<sup>Required</sup> <a name="AutomaticFailoverEnabled" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.automaticFailoverEnabled"></a>

```go
func AutomaticFailoverEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `AutoMinorVersionUpgrade`<sup>Required</sup> <a name="AutoMinorVersionUpgrade" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.autoMinorVersionUpgrade"></a>

```go
func AutoMinorVersionUpgrade() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `CacheNodeType`<sup>Required</sup> <a name="CacheNodeType" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.cacheNodeType"></a>

```go
func CacheNodeType() *string
```

- *Type:* *string

---

##### `CacheParameterGroupName`<sup>Required</sup> <a name="CacheParameterGroupName" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.cacheParameterGroupName"></a>

```go
func CacheParameterGroupName() *string
```

- *Type:* *string

---

##### `CacheSecurityGroupNames`<sup>Required</sup> <a name="CacheSecurityGroupNames" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.cacheSecurityGroupNames"></a>

```go
func CacheSecurityGroupNames() *[]*string
```

- *Type:* *[]*string

---

##### `CacheSubnetGroupName`<sup>Required</sup> <a name="CacheSubnetGroupName" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.cacheSubnetGroupName"></a>

```go
func CacheSubnetGroupName() *string
```

- *Type:* *string

---

##### `ClusterMode`<sup>Required</sup> <a name="ClusterMode" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.clusterMode"></a>

```go
func ClusterMode() *string
```

- *Type:* *string

---

##### `ConfigurationEndPoint`<sup>Required</sup> <a name="ConfigurationEndPoint" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.configurationEndPoint"></a>

```go
func ConfigurationEndPoint() DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference">DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference</a>

---

##### `DataTieringEnabled`<sup>Required</sup> <a name="DataTieringEnabled" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.dataTieringEnabled"></a>

```go
func DataTieringEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Durability`<sup>Required</sup> <a name="Durability" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.durability"></a>

```go
func Durability() *string
```

- *Type:* *string

---

##### `EffectiveDurability`<sup>Required</sup> <a name="EffectiveDurability" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.effectiveDurability"></a>

```go
func EffectiveDurability() *string
```

- *Type:* *string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `GlobalReplicationGroupId`<sup>Required</sup> <a name="GlobalReplicationGroupId" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.globalReplicationGroupId"></a>

```go
func GlobalReplicationGroupId() *string
```

- *Type:* *string

---

##### `IpDiscovery`<sup>Required</sup> <a name="IpDiscovery" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.ipDiscovery"></a>

```go
func IpDiscovery() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `LogDeliveryConfigurations`<sup>Required</sup> <a name="LogDeliveryConfigurations" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.logDeliveryConfigurations"></a>

```go
func LogDeliveryConfigurations() DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList</a>

---

##### `MultiAzEnabled`<sup>Required</sup> <a name="MultiAzEnabled" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.multiAzEnabled"></a>

```go
func MultiAzEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.networkType"></a>

```go
func NetworkType() *string
```

- *Type:* *string

---

##### `NodeGroupConfiguration`<sup>Required</sup> <a name="NodeGroupConfiguration" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.nodeGroupConfiguration"></a>

```go
func NodeGroupConfiguration() DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList">DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList</a>

---

##### `NotificationTopicArn`<sup>Required</sup> <a name="NotificationTopicArn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.notificationTopicArn"></a>

```go
func NotificationTopicArn() *string
```

- *Type:* *string

---

##### `NumCacheClusters`<sup>Required</sup> <a name="NumCacheClusters" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.numCacheClusters"></a>

```go
func NumCacheClusters() *f64
```

- *Type:* *f64

---

##### `NumNodeGroups`<sup>Required</sup> <a name="NumNodeGroups" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.numNodeGroups"></a>

```go
func NumNodeGroups() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PreferredCacheClusterAZs`<sup>Required</sup> <a name="PreferredCacheClusterAZs" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.preferredCacheClusterAZs"></a>

```go
func PreferredCacheClusterAZs() *[]*string
```

- *Type:* *[]*string

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.preferredMaintenanceWindow"></a>

```go
func PreferredMaintenanceWindow() *string
```

- *Type:* *string

---

##### `PrimaryClusterId`<sup>Required</sup> <a name="PrimaryClusterId" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.primaryClusterId"></a>

```go
func PrimaryClusterId() *string
```

- *Type:* *string

---

##### `PrimaryEndPoint`<sup>Required</sup> <a name="PrimaryEndPoint" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.primaryEndPoint"></a>

```go
func PrimaryEndPoint() DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference">DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference</a>

---

##### `ReadEndPoint`<sup>Required</sup> <a name="ReadEndPoint" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.readEndPoint"></a>

```go
func ReadEndPoint() DataAwsccElasticacheReplicationGroupReadEndPointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference">DataAwsccElasticacheReplicationGroupReadEndPointOutputReference</a>

---

##### `ReaderEndPoint`<sup>Required</sup> <a name="ReaderEndPoint" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.readerEndPoint"></a>

```go
func ReaderEndPoint() DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference">DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference</a>

---

##### `ReplicasPerNodeGroup`<sup>Required</sup> <a name="ReplicasPerNodeGroup" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.replicasPerNodeGroup"></a>

```go
func ReplicasPerNodeGroup() *f64
```

- *Type:* *f64

---

##### `ReplicationGroupDescription`<sup>Required</sup> <a name="ReplicationGroupDescription" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.replicationGroupDescription"></a>

```go
func ReplicationGroupDescription() *string
```

- *Type:* *string

---

##### `ReplicationGroupId`<sup>Required</sup> <a name="ReplicationGroupId" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.replicationGroupId"></a>

```go
func ReplicationGroupId() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotArns`<sup>Required</sup> <a name="SnapshotArns" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.snapshotArns"></a>

```go
func SnapshotArns() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.snapshotName"></a>

```go
func SnapshotName() *string
```

- *Type:* *string

---

##### `SnapshotRetentionLimit`<sup>Required</sup> <a name="SnapshotRetentionLimit" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.snapshotRetentionLimit"></a>

```go
func SnapshotRetentionLimit() *f64
```

- *Type:* *f64

---

##### `SnapshottingClusterId`<sup>Required</sup> <a name="SnapshottingClusterId" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.snapshottingClusterId"></a>

```go
func SnapshottingClusterId() *string
```

- *Type:* *string

---

##### `SnapshotWindow`<sup>Required</sup> <a name="SnapshotWindow" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.snapshotWindow"></a>

```go
func SnapshotWindow() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.tags"></a>

```go
func Tags() DataAwsccElasticacheReplicationGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList">DataAwsccElasticacheReplicationGroupTagsList</a>

---

##### `TransitEncryptionEnabled`<sup>Required</sup> <a name="TransitEncryptionEnabled" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.transitEncryptionEnabled"></a>

```go
func TransitEncryptionEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `TransitEncryptionMode`<sup>Required</sup> <a name="TransitEncryptionMode" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.transitEncryptionMode"></a>

```go
func TransitEncryptionMode() *string
```

- *Type:* *string

---

##### `UserGroupIds`<sup>Required</sup> <a name="UserGroupIds" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.userGroupIds"></a>

```go
func UserGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccElasticacheReplicationGroupConfig <a name="DataAwsccElasticacheReplicationGroupConfig" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticachereplicationgroup"

&dataawsccelasticachereplicationgroup.DataAwsccElasticacheReplicationGroupConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/elasticache_replication_group#id DataAwsccElasticacheReplicationGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccElasticacheReplicationGroupConfigurationEndPoint <a name="DataAwsccElasticacheReplicationGroupConfigurationEndPoint" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticachereplicationgroup"

&dataawsccelasticachereplicationgroup.DataAwsccElasticacheReplicationGroupConfigurationEndPoint {

}
```


### DataAwsccElasticacheReplicationGroupLogDeliveryConfigurations <a name="DataAwsccElasticacheReplicationGroupLogDeliveryConfigurations" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticachereplicationgroup"

&dataawsccelasticachereplicationgroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurations {

}
```


### DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails <a name="DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticachereplicationgroup"

&dataawsccelasticachereplicationgroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails {

}
```


### DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails <a name="DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticachereplicationgroup"

&dataawsccelasticachereplicationgroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails {

}
```


### DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails <a name="DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticachereplicationgroup"

&dataawsccelasticachereplicationgroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails {

}
```


### DataAwsccElasticacheReplicationGroupNodeGroupConfiguration <a name="DataAwsccElasticacheReplicationGroupNodeGroupConfiguration" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticachereplicationgroup"

&dataawsccelasticachereplicationgroup.DataAwsccElasticacheReplicationGroupNodeGroupConfiguration {

}
```


### DataAwsccElasticacheReplicationGroupPrimaryEndPoint <a name="DataAwsccElasticacheReplicationGroupPrimaryEndPoint" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticachereplicationgroup"

&dataawsccelasticachereplicationgroup.DataAwsccElasticacheReplicationGroupPrimaryEndPoint {

}
```


### DataAwsccElasticacheReplicationGroupReadEndPoint <a name="DataAwsccElasticacheReplicationGroupReadEndPoint" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticachereplicationgroup"

&dataawsccelasticachereplicationgroup.DataAwsccElasticacheReplicationGroupReadEndPoint {

}
```


### DataAwsccElasticacheReplicationGroupReaderEndPoint <a name="DataAwsccElasticacheReplicationGroupReaderEndPoint" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticachereplicationgroup"

&dataawsccelasticachereplicationgroup.DataAwsccElasticacheReplicationGroupReaderEndPoint {

}
```


### DataAwsccElasticacheReplicationGroupTags <a name="DataAwsccElasticacheReplicationGroupTags" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticachereplicationgroup"

&dataawsccelasticachereplicationgroup.DataAwsccElasticacheReplicationGroupTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference <a name="DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticachereplicationgroup"

dataawsccelasticachereplicationgroup.NewDataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPoint">DataAwsccElasticacheReplicationGroupConfigurationEndPoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticacheReplicationGroupConfigurationEndPoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPoint">DataAwsccElasticacheReplicationGroupConfigurationEndPoint</a>

---


### DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference <a name="DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticachereplicationgroup"

dataawsccelasticachereplicationgroup.NewDataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.logGroup">LogGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.logGroup"></a>

```go
func LogGroup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a>

---


### DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference <a name="DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticachereplicationgroup"

dataawsccelasticachereplicationgroup.NewDataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.deliveryStream">DeliveryStream</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeliveryStream`<sup>Required</sup> <a name="DeliveryStream" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.deliveryStream"></a>

```go
func DeliveryStream() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a>

---


### DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference <a name="DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticachereplicationgroup"

dataawsccelasticachereplicationgroup.NewDataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.cloudwatchLogsDetails">CloudwatchLogsDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.kinesisFirehoseDetails">KinesisFirehoseDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogsDetails`<sup>Required</sup> <a name="CloudwatchLogsDetails" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.cloudwatchLogsDetails"></a>

```go
func CloudwatchLogsDetails() DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference</a>

---

##### `KinesisFirehoseDetails`<sup>Required</sup> <a name="KinesisFirehoseDetails" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.kinesisFirehoseDetails"></a>

```go
func KinesisFirehoseDetails() DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails</a>

---


### DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList <a name="DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticachereplicationgroup"

dataawsccelasticachereplicationgroup.NewDataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.get"></a>

```go
func Get(index *f64) DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference <a name="DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticachereplicationgroup"

dataawsccelasticachereplicationgroup.NewDataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationDetails">DestinationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationType">DestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logFormat">LogFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logType">LogType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurations">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationDetails`<sup>Required</sup> <a name="DestinationDetails" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationDetails"></a>

```go
func DestinationDetails() DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference</a>

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationType"></a>

```go
func DestinationType() *string
```

- *Type:* *string

---

##### `LogFormat`<sup>Required</sup> <a name="LogFormat" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logFormat"></a>

```go
func LogFormat() *string
```

- *Type:* *string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logType"></a>

```go
func LogType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticacheReplicationGroupLogDeliveryConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurations">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurations</a>

---


### DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList <a name="DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticachereplicationgroup"

dataawsccelasticachereplicationgroup.NewDataAwsccElasticacheReplicationGroupNodeGroupConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference <a name="DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticachereplicationgroup"

dataawsccelasticachereplicationgroup.NewDataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.nodeGroupId">NodeGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.primaryAvailabilityZone">PrimaryAvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaAvailabilityZones">ReplicaAvailabilityZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaCount">ReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.slots">Slots</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfiguration">DataAwsccElasticacheReplicationGroupNodeGroupConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NodeGroupId`<sup>Required</sup> <a name="NodeGroupId" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.nodeGroupId"></a>

```go
func NodeGroupId() *string
```

- *Type:* *string

---

##### `PrimaryAvailabilityZone`<sup>Required</sup> <a name="PrimaryAvailabilityZone" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.primaryAvailabilityZone"></a>

```go
func PrimaryAvailabilityZone() *string
```

- *Type:* *string

---

##### `ReplicaAvailabilityZones`<sup>Required</sup> <a name="ReplicaAvailabilityZones" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaAvailabilityZones"></a>

```go
func ReplicaAvailabilityZones() *[]*string
```

- *Type:* *[]*string

---

##### `ReplicaCount`<sup>Required</sup> <a name="ReplicaCount" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaCount"></a>

```go
func ReplicaCount() *f64
```

- *Type:* *f64

---

##### `Slots`<sup>Required</sup> <a name="Slots" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.slots"></a>

```go
func Slots() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticacheReplicationGroupNodeGroupConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfiguration">DataAwsccElasticacheReplicationGroupNodeGroupConfiguration</a>

---


### DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference <a name="DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticachereplicationgroup"

dataawsccelasticachereplicationgroup.NewDataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPoint">DataAwsccElasticacheReplicationGroupPrimaryEndPoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticacheReplicationGroupPrimaryEndPoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPoint">DataAwsccElasticacheReplicationGroupPrimaryEndPoint</a>

---


### DataAwsccElasticacheReplicationGroupReadEndPointOutputReference <a name="DataAwsccElasticacheReplicationGroupReadEndPointOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticachereplicationgroup"

dataawsccelasticachereplicationgroup.NewDataAwsccElasticacheReplicationGroupReadEndPointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccElasticacheReplicationGroupReadEndPointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.property.addresses">Addresses</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.property.addressesList">AddressesList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.property.ports">Ports</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.property.portsList">PortsList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPoint">DataAwsccElasticacheReplicationGroupReadEndPoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.property.addresses"></a>

```go
func Addresses() *string
```

- *Type:* *string

---

##### `AddressesList`<sup>Required</sup> <a name="AddressesList" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.property.addressesList"></a>

```go
func AddressesList() *[]*string
```

- *Type:* *[]*string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.property.ports"></a>

```go
func Ports() *string
```

- *Type:* *string

---

##### `PortsList`<sup>Required</sup> <a name="PortsList" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.property.portsList"></a>

```go
func PortsList() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticacheReplicationGroupReadEndPoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPoint">DataAwsccElasticacheReplicationGroupReadEndPoint</a>

---


### DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference <a name="DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticachereplicationgroup"

dataawsccelasticachereplicationgroup.NewDataAwsccElasticacheReplicationGroupReaderEndPointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPoint">DataAwsccElasticacheReplicationGroupReaderEndPoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticacheReplicationGroupReaderEndPoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPoint">DataAwsccElasticacheReplicationGroupReaderEndPoint</a>

---


### DataAwsccElasticacheReplicationGroupTagsList <a name="DataAwsccElasticacheReplicationGroupTagsList" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticachereplicationgroup"

dataawsccelasticachereplicationgroup.NewDataAwsccElasticacheReplicationGroupTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccElasticacheReplicationGroupTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.get"></a>

```go
func Get(index *f64) DataAwsccElasticacheReplicationGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccElasticacheReplicationGroupTagsOutputReference <a name="DataAwsccElasticacheReplicationGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticachereplicationgroup"

dataawsccelasticachereplicationgroup.NewDataAwsccElasticacheReplicationGroupTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccElasticacheReplicationGroupTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTags">DataAwsccElasticacheReplicationGroupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticacheReplicationGroupTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTags">DataAwsccElasticacheReplicationGroupTags</a>

---



