# `dataAwsccEc2NetworkInsightsPath` Submodule <a name="`dataAwsccEc2NetworkInsightsPath` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2NetworkInsightsPath <a name="DataAwsccEc2NetworkInsightsPath" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_network_insights_path awscc_ec2_network_insights_path}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsPath } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath(scope: Construct, id: string, config: DataAwsccEc2NetworkInsightsPathConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig">DataAwsccEc2NetworkInsightsPathConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig">DataAwsccEc2NetworkInsightsPathConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2NetworkInsightsPath resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.isConstruct"></a>

```typescript
import { dataAwsccEc2NetworkInsightsPath } from '@cdktn/provider-awscc'

dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.isTerraformElement"></a>

```typescript
import { dataAwsccEc2NetworkInsightsPath } from '@cdktn/provider-awscc'

dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2NetworkInsightsPath } from '@cdktn/provider-awscc'

dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2NetworkInsightsPath } from '@cdktn/provider-awscc'

dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2NetworkInsightsPath resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2NetworkInsightsPath to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2NetworkInsightsPath that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_network_insights_path#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2NetworkInsightsPath to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.destinationArn">destinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.destinationIp">destinationIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.destinationPort">destinationPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.filterAtDestination">filterAtDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference">DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.filterAtSource">filterAtSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference">DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.networkInsightsPathArn">networkInsightsPathArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.networkInsightsPathId">networkInsightsPathId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.sourceArn">sourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.sourceIp">sourceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList">DataAwsccEc2NetworkInsightsPathTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.destinationArn"></a>

```typescript
public readonly destinationArn: string;
```

- *Type:* string

---

##### `destinationIp`<sup>Required</sup> <a name="destinationIp" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.destinationIp"></a>

```typescript
public readonly destinationIp: string;
```

- *Type:* string

---

##### `destinationPort`<sup>Required</sup> <a name="destinationPort" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.destinationPort"></a>

```typescript
public readonly destinationPort: number;
```

- *Type:* number

---

##### `filterAtDestination`<sup>Required</sup> <a name="filterAtDestination" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.filterAtDestination"></a>

```typescript
public readonly filterAtDestination: DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference">DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference</a>

---

##### `filterAtSource`<sup>Required</sup> <a name="filterAtSource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.filterAtSource"></a>

```typescript
public readonly filterAtSource: DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference">DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference</a>

---

##### `networkInsightsPathArn`<sup>Required</sup> <a name="networkInsightsPathArn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.networkInsightsPathArn"></a>

```typescript
public readonly networkInsightsPathArn: string;
```

- *Type:* string

---

##### `networkInsightsPathId`<sup>Required</sup> <a name="networkInsightsPathId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.networkInsightsPathId"></a>

```typescript
public readonly networkInsightsPathId: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.sourceArn"></a>

```typescript
public readonly sourceArn: string;
```

- *Type:* string

---

##### `sourceIp`<sup>Required</sup> <a name="sourceIp" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.sourceIp"></a>

```typescript
public readonly sourceIp: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.tags"></a>

```typescript
public readonly tags: DataAwsccEc2NetworkInsightsPathTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList">DataAwsccEc2NetworkInsightsPathTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2NetworkInsightsPathConfig <a name="DataAwsccEc2NetworkInsightsPathConfig" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsPath } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInsightsPathConfig: dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_network_insights_path#id DataAwsccEc2NetworkInsightsPath#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2NetworkInsightsPathFilterAtDestination <a name="DataAwsccEc2NetworkInsightsPathFilterAtDestination" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestination.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsPath } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInsightsPathFilterAtDestination: dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestination = { ... }
```


### DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange <a name="DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsPath } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange: dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange = { ... }
```


### DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRange <a name="DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRange" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRange.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsPath } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRange: dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRange = { ... }
```


### DataAwsccEc2NetworkInsightsPathFilterAtSource <a name="DataAwsccEc2NetworkInsightsPathFilterAtSource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSource.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsPath } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInsightsPathFilterAtSource: dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSource = { ... }
```


### DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRange <a name="DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRange" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRange.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsPath } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRange: dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRange = { ... }
```


### DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRange <a name="DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRange" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRange.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsPath } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRange: dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRange = { ... }
```


### DataAwsccEc2NetworkInsightsPathTags <a name="DataAwsccEc2NetworkInsightsPathTags" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTags.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsPath } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInsightsPathTags: dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference <a name="DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsPath } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange">DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange">DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange</a>

---


### DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference <a name="DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsPath } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.destinationAddress">destinationAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference">DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.sourceAddress">sourceAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference">DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestination">DataAwsccEc2NetworkInsightsPathFilterAtDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationAddress`<sup>Required</sup> <a name="destinationAddress" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.destinationAddress"></a>

```typescript
public readonly destinationAddress: string;
```

- *Type:* string

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference">DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference</a>

---

##### `sourceAddress`<sup>Required</sup> <a name="sourceAddress" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.sourceAddress"></a>

```typescript
public readonly sourceAddress: string;
```

- *Type:* string

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference">DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInsightsPathFilterAtDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestination">DataAwsccEc2NetworkInsightsPathFilterAtDestination</a>

---


### DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference <a name="DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsPath } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRange">DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRange">DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRange</a>

---


### DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference <a name="DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsPath } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRange">DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRange">DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRange</a>

---


### DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference <a name="DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsPath } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.property.destinationAddress">destinationAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference">DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.property.sourceAddress">sourceAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference">DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSource">DataAwsccEc2NetworkInsightsPathFilterAtSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationAddress`<sup>Required</sup> <a name="destinationAddress" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.property.destinationAddress"></a>

```typescript
public readonly destinationAddress: string;
```

- *Type:* string

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference">DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference</a>

---

##### `sourceAddress`<sup>Required</sup> <a name="sourceAddress" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.property.sourceAddress"></a>

```typescript
public readonly sourceAddress: string;
```

- *Type:* string

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference">DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInsightsPathFilterAtSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSource">DataAwsccEc2NetworkInsightsPathFilterAtSource</a>

---


### DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference <a name="DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsPath } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRange">DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRange">DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRange</a>

---


### DataAwsccEc2NetworkInsightsPathTagsList <a name="DataAwsccEc2NetworkInsightsPathTagsList" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsPath } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2NetworkInsightsPathTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2NetworkInsightsPathTagsOutputReference <a name="DataAwsccEc2NetworkInsightsPathTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsPath } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTags">DataAwsccEc2NetworkInsightsPathTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInsightsPathTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTags">DataAwsccEc2NetworkInsightsPathTags</a>

---



