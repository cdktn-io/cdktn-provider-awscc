# `dataAwsccEc2NetworkInsightsAccessScope` Submodule <a name="`dataAwsccEc2NetworkInsightsAccessScope` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2NetworkInsightsAccessScope <a name="DataAwsccEc2NetworkInsightsAccessScope" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_network_insights_access_scope awscc_ec2_network_insights_access_scope}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope(scope: Construct, id: string, config: DataAwsccEc2NetworkInsightsAccessScopeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig">DataAwsccEc2NetworkInsightsAccessScopeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig">DataAwsccEc2NetworkInsightsAccessScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2NetworkInsightsAccessScope resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.isConstruct"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.isTerraformElement"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2NetworkInsightsAccessScope resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2NetworkInsightsAccessScope to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2NetworkInsightsAccessScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_network_insights_access_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2NetworkInsightsAccessScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.excludePaths">excludePaths</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.matchPaths">matchPaths</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.networkInsightsAccessScopeArn">networkInsightsAccessScopeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.networkInsightsAccessScopeId">networkInsightsAccessScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList">DataAwsccEc2NetworkInsightsAccessScopeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.updatedDate">updatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `excludePaths`<sup>Required</sup> <a name="excludePaths" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.excludePaths"></a>

```typescript
public readonly excludePaths: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList</a>

---

##### `matchPaths`<sup>Required</sup> <a name="matchPaths" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.matchPaths"></a>

```typescript
public readonly matchPaths: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList</a>

---

##### `networkInsightsAccessScopeArn`<sup>Required</sup> <a name="networkInsightsAccessScopeArn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.networkInsightsAccessScopeArn"></a>

```typescript
public readonly networkInsightsAccessScopeArn: string;
```

- *Type:* string

---

##### `networkInsightsAccessScopeId`<sup>Required</sup> <a name="networkInsightsAccessScopeId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.networkInsightsAccessScopeId"></a>

```typescript
public readonly networkInsightsAccessScopeId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.tags"></a>

```typescript
public readonly tags: DataAwsccEc2NetworkInsightsAccessScopeTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList">DataAwsccEc2NetworkInsightsAccessScopeTagsList</a>

---

##### `updatedDate`<sup>Required</sup> <a name="updatedDate" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.updatedDate"></a>

```typescript
public readonly updatedDate: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2NetworkInsightsAccessScopeConfig <a name="DataAwsccEc2NetworkInsightsAccessScopeConfig" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInsightsAccessScopeConfig: dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_network_insights_access_scope#id DataAwsccEc2NetworkInsightsAccessScope#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2NetworkInsightsAccessScopeExcludePaths <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePaths" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePaths.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInsightsAccessScopeExcludePaths: dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePaths = { ... }
```


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestination <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestination" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestination.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestination: dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestination = { ... }
```


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement: dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement = { ... }
```


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement: dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement = { ... }
```


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSource <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSource.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInsightsAccessScopeExcludePathsSource: dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSource = { ... }
```


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement: dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement = { ... }
```


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement: dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement = { ... }
```


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResources <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResources" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResources.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResources: dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResources = { ... }
```


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement: dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement = { ... }
```


### DataAwsccEc2NetworkInsightsAccessScopeMatchPaths <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPaths" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPaths.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInsightsAccessScopeMatchPaths: dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPaths = { ... }
```


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestination <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestination" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestination.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestination: dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestination = { ... }
```


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement: dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement = { ... }
```


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement: dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement = { ... }
```


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSource <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSource.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInsightsAccessScopeMatchPathsSource: dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSource = { ... }
```


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement: dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement = { ... }
```


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement: dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement = { ... }
```


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResources <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResources" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResources.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResources: dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResources = { ... }
```


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement: dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement = { ... }
```


### DataAwsccEc2NetworkInsightsAccessScopeTags <a name="DataAwsccEc2NetworkInsightsAccessScopeTags" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTags.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInsightsAccessScopeTags: dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.packetHeaderStatement">packetHeaderStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.resourceStatement">resourceStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestination">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `packetHeaderStatement`<sup>Required</sup> <a name="packetHeaderStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.packetHeaderStatement"></a>

```typescript
public readonly packetHeaderStatement: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference</a>

---

##### `resourceStatement`<sup>Required</sup> <a name="resourceStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.resourceStatement"></a>

```typescript
public readonly resourceStatement: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestination">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestination</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationAddresses">destinationAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPorts">destinationPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixLists">destinationPrefixLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourceAddresses">sourceAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePorts">sourcePorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixLists">sourcePrefixLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationAddresses`<sup>Required</sup> <a name="destinationAddresses" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationAddresses"></a>

```typescript
public readonly destinationAddresses: string[];
```

- *Type:* string[]

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPorts"></a>

```typescript
public readonly destinationPorts: string[];
```

- *Type:* string[]

---

##### `destinationPrefixLists`<sup>Required</sup> <a name="destinationPrefixLists" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixLists"></a>

```typescript
public readonly destinationPrefixLists: string[];
```

- *Type:* string[]

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `sourceAddresses`<sup>Required</sup> <a name="sourceAddresses" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourceAddresses"></a>

```typescript
public readonly sourceAddresses: string[];
```

- *Type:* string[]

---

##### `sourcePorts`<sup>Required</sup> <a name="sourcePorts" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePorts"></a>

```typescript
public readonly sourcePorts: string[];
```

- *Type:* string[]

---

##### `sourcePrefixLists`<sup>Required</sup> <a name="sourcePrefixLists" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixLists"></a>

```typescript
public readonly sourcePrefixLists: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.property.throughResources">throughResources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePaths">DataAwsccEc2NetworkInsightsAccessScopeExcludePaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.property.destination"></a>

```typescript
public readonly destination: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.property.source"></a>

```typescript
public readonly source: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference</a>

---

##### `throughResources`<sup>Required</sup> <a name="throughResources" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.property.throughResources"></a>

```typescript
public readonly throughResources: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInsightsAccessScopeExcludePaths;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePaths">DataAwsccEc2NetworkInsightsAccessScopeExcludePaths</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.packetHeaderStatement">packetHeaderStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.resourceStatement">resourceStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSource">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `packetHeaderStatement`<sup>Required</sup> <a name="packetHeaderStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.packetHeaderStatement"></a>

```typescript
public readonly packetHeaderStatement: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference</a>

---

##### `resourceStatement`<sup>Required</sup> <a name="resourceStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.resourceStatement"></a>

```typescript
public readonly resourceStatement: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSource">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSource</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationAddresses">destinationAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPorts">destinationPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixLists">destinationPrefixLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourceAddresses">sourceAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePorts">sourcePorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixLists">sourcePrefixLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationAddresses`<sup>Required</sup> <a name="destinationAddresses" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationAddresses"></a>

```typescript
public readonly destinationAddresses: string[];
```

- *Type:* string[]

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPorts"></a>

```typescript
public readonly destinationPorts: string[];
```

- *Type:* string[]

---

##### `destinationPrefixLists`<sup>Required</sup> <a name="destinationPrefixLists" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixLists"></a>

```typescript
public readonly destinationPrefixLists: string[];
```

- *Type:* string[]

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `sourceAddresses`<sup>Required</sup> <a name="sourceAddresses" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourceAddresses"></a>

```typescript
public readonly sourceAddresses: string[];
```

- *Type:* string[]

---

##### `sourcePorts`<sup>Required</sup> <a name="sourcePorts" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePorts"></a>

```typescript
public readonly sourcePorts: string[];
```

- *Type:* string[]

---

##### `sourcePrefixLists`<sup>Required</sup> <a name="sourcePrefixLists" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixLists"></a>

```typescript
public readonly sourcePrefixLists: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.get"></a>

```typescript
public get(index: number): DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.resourceStatement">resourceStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResources">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceStatement`<sup>Required</sup> <a name="resourceStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.resourceStatement"></a>

```typescript
public readonly resourceStatement: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResources;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResources">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResources</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.packetHeaderStatement">packetHeaderStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.resourceStatement">resourceStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestination">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `packetHeaderStatement`<sup>Required</sup> <a name="packetHeaderStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.packetHeaderStatement"></a>

```typescript
public readonly packetHeaderStatement: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference</a>

---

##### `resourceStatement`<sup>Required</sup> <a name="resourceStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.resourceStatement"></a>

```typescript
public readonly resourceStatement: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestination">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestination</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationAddresses">destinationAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPorts">destinationPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixLists">destinationPrefixLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourceAddresses">sourceAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePorts">sourcePorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixLists">sourcePrefixLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationAddresses`<sup>Required</sup> <a name="destinationAddresses" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationAddresses"></a>

```typescript
public readonly destinationAddresses: string[];
```

- *Type:* string[]

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPorts"></a>

```typescript
public readonly destinationPorts: string[];
```

- *Type:* string[]

---

##### `destinationPrefixLists`<sup>Required</sup> <a name="destinationPrefixLists" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixLists"></a>

```typescript
public readonly destinationPrefixLists: string[];
```

- *Type:* string[]

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `sourceAddresses`<sup>Required</sup> <a name="sourceAddresses" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourceAddresses"></a>

```typescript
public readonly sourceAddresses: string[];
```

- *Type:* string[]

---

##### `sourcePorts`<sup>Required</sup> <a name="sourcePorts" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePorts"></a>

```typescript
public readonly sourcePorts: string[];
```

- *Type:* string[]

---

##### `sourcePrefixLists`<sup>Required</sup> <a name="sourcePrefixLists" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixLists"></a>

```typescript
public readonly sourcePrefixLists: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.property.throughResources">throughResources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPaths">DataAwsccEc2NetworkInsightsAccessScopeMatchPaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.property.destination"></a>

```typescript
public readonly destination: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.property.source"></a>

```typescript
public readonly source: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference</a>

---

##### `throughResources`<sup>Required</sup> <a name="throughResources" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.property.throughResources"></a>

```typescript
public readonly throughResources: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInsightsAccessScopeMatchPaths;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPaths">DataAwsccEc2NetworkInsightsAccessScopeMatchPaths</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.packetHeaderStatement">packetHeaderStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.resourceStatement">resourceStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSource">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `packetHeaderStatement`<sup>Required</sup> <a name="packetHeaderStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.packetHeaderStatement"></a>

```typescript
public readonly packetHeaderStatement: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference</a>

---

##### `resourceStatement`<sup>Required</sup> <a name="resourceStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.resourceStatement"></a>

```typescript
public readonly resourceStatement: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSource">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSource</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationAddresses">destinationAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPorts">destinationPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixLists">destinationPrefixLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourceAddresses">sourceAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePorts">sourcePorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixLists">sourcePrefixLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationAddresses`<sup>Required</sup> <a name="destinationAddresses" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationAddresses"></a>

```typescript
public readonly destinationAddresses: string[];
```

- *Type:* string[]

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPorts"></a>

```typescript
public readonly destinationPorts: string[];
```

- *Type:* string[]

---

##### `destinationPrefixLists`<sup>Required</sup> <a name="destinationPrefixLists" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixLists"></a>

```typescript
public readonly destinationPrefixLists: string[];
```

- *Type:* string[]

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `sourceAddresses`<sup>Required</sup> <a name="sourceAddresses" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourceAddresses"></a>

```typescript
public readonly sourceAddresses: string[];
```

- *Type:* string[]

---

##### `sourcePorts`<sup>Required</sup> <a name="sourcePorts" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePorts"></a>

```typescript
public readonly sourcePorts: string[];
```

- *Type:* string[]

---

##### `sourcePrefixLists`<sup>Required</sup> <a name="sourcePrefixLists" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixLists"></a>

```typescript
public readonly sourcePrefixLists: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.get"></a>

```typescript
public get(index: number): DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.property.resourceStatement">resourceStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResources">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceStatement`<sup>Required</sup> <a name="resourceStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.property.resourceStatement"></a>

```typescript
public readonly resourceStatement: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResources;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResources">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResources</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeTagsList <a name="DataAwsccEc2NetworkInsightsAccessScopeTagsList" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInsightsAccessScope } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTags">DataAwsccEc2NetworkInsightsAccessScopeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInsightsAccessScopeTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTags">DataAwsccEc2NetworkInsightsAccessScopeTags</a>

---



