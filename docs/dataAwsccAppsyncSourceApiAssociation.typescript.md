# `dataAwsccAppsyncSourceApiAssociation` Submodule <a name="`dataAwsccAppsyncSourceApiAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAppsyncSourceApiAssociation <a name="DataAwsccAppsyncSourceApiAssociation" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appsync_source_api_association awscc_appsync_source_api_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer"></a>

```typescript
import { dataAwsccAppsyncSourceApiAssociation } from '@cdktn/provider-awscc'

new dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation(scope: Construct, id: string, config: DataAwsccAppsyncSourceApiAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig">DataAwsccAppsyncSourceApiAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig">DataAwsccAppsyncSourceApiAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAppsyncSourceApiAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.isConstruct"></a>

```typescript
import { dataAwsccAppsyncSourceApiAssociation } from '@cdktn/provider-awscc'

dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.isTerraformElement"></a>

```typescript
import { dataAwsccAppsyncSourceApiAssociation } from '@cdktn/provider-awscc'

dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.isTerraformDataSource"></a>

```typescript
import { dataAwsccAppsyncSourceApiAssociation } from '@cdktn/provider-awscc'

dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.generateConfigForImport"></a>

```typescript
import { dataAwsccAppsyncSourceApiAssociation } from '@cdktn/provider-awscc'

dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccAppsyncSourceApiAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccAppsyncSourceApiAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccAppsyncSourceApiAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appsync_source_api_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAppsyncSourceApiAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.associationArn">associationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.associationId">associationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.lastSuccessfulMergeDate">lastSuccessfulMergeDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.mergedApiArn">mergedApiArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.mergedApiId">mergedApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.mergedApiIdentifier">mergedApiIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiArn">sourceApiArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiAssociationConfig">sourceApiAssociationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference">DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiAssociationStatus">sourceApiAssociationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiAssociationStatusDetail">sourceApiAssociationStatusDetail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiId">sourceApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiIdentifier">sourceApiIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `associationArn`<sup>Required</sup> <a name="associationArn" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.associationArn"></a>

```typescript
public readonly associationArn: string;
```

- *Type:* string

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.associationId"></a>

```typescript
public readonly associationId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `lastSuccessfulMergeDate`<sup>Required</sup> <a name="lastSuccessfulMergeDate" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.lastSuccessfulMergeDate"></a>

```typescript
public readonly lastSuccessfulMergeDate: string;
```

- *Type:* string

---

##### `mergedApiArn`<sup>Required</sup> <a name="mergedApiArn" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.mergedApiArn"></a>

```typescript
public readonly mergedApiArn: string;
```

- *Type:* string

---

##### `mergedApiId`<sup>Required</sup> <a name="mergedApiId" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.mergedApiId"></a>

```typescript
public readonly mergedApiId: string;
```

- *Type:* string

---

##### `mergedApiIdentifier`<sup>Required</sup> <a name="mergedApiIdentifier" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.mergedApiIdentifier"></a>

```typescript
public readonly mergedApiIdentifier: string;
```

- *Type:* string

---

##### `sourceApiArn`<sup>Required</sup> <a name="sourceApiArn" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiArn"></a>

```typescript
public readonly sourceApiArn: string;
```

- *Type:* string

---

##### `sourceApiAssociationConfig`<sup>Required</sup> <a name="sourceApiAssociationConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiAssociationConfig"></a>

```typescript
public readonly sourceApiAssociationConfig: DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference">DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference</a>

---

##### `sourceApiAssociationStatus`<sup>Required</sup> <a name="sourceApiAssociationStatus" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiAssociationStatus"></a>

```typescript
public readonly sourceApiAssociationStatus: string;
```

- *Type:* string

---

##### `sourceApiAssociationStatusDetail`<sup>Required</sup> <a name="sourceApiAssociationStatusDetail" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiAssociationStatusDetail"></a>

```typescript
public readonly sourceApiAssociationStatusDetail: string;
```

- *Type:* string

---

##### `sourceApiId`<sup>Required</sup> <a name="sourceApiId" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiId"></a>

```typescript
public readonly sourceApiId: string;
```

- *Type:* string

---

##### `sourceApiIdentifier`<sup>Required</sup> <a name="sourceApiIdentifier" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiIdentifier"></a>

```typescript
public readonly sourceApiIdentifier: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAppsyncSourceApiAssociationConfig <a name="DataAwsccAppsyncSourceApiAssociationConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.Initializer"></a>

```typescript
import { dataAwsccAppsyncSourceApiAssociation } from '@cdktn/provider-awscc'

const dataAwsccAppsyncSourceApiAssociationConfig: dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appsync_source_api_association#id DataAwsccAppsyncSourceApiAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig <a name="DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig.Initializer"></a>

```typescript
import { dataAwsccAppsyncSourceApiAssociation } from '@cdktn/provider-awscc'

const dataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig: dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference <a name="DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppsyncSourceApiAssociation } from '@cdktn/provider-awscc'

new dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.mergeType">mergeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig">DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mergeType`<sup>Required</sup> <a name="mergeType" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.mergeType"></a>

```typescript
public readonly mergeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig">DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig</a>

---



