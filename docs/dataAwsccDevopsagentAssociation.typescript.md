# `dataAwsccDevopsagentAssociation` Submodule <a name="`dataAwsccDevopsagentAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDevopsagentAssociation <a name="DataAwsccDevopsagentAssociation" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/devopsagent_association awscc_devopsagent_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation(scope: Construct, id: string, config: DataAwsccDevopsagentAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig">DataAwsccDevopsagentAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig">DataAwsccDevopsagentAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDevopsagentAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.isConstruct"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.isTerraformElement"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.isTerraformDataSource"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.generateConfigForImport"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccDevopsagentAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDevopsagentAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDevopsagentAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/devopsagent_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDevopsagentAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.agentSpaceId">agentSpaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.associationId">associationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference">DataAwsccDevopsagentAssociationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.linkedAssociationIds">linkedAssociationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `agentSpaceId`<sup>Required</sup> <a name="agentSpaceId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.agentSpaceId"></a>

```typescript
public readonly agentSpaceId: string;
```

- *Type:* string

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.associationId"></a>

```typescript
public readonly associationId: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.configuration"></a>

```typescript
public readonly configuration: DataAwsccDevopsagentAssociationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference">DataAwsccDevopsagentAssociationConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `linkedAssociationIds`<sup>Required</sup> <a name="linkedAssociationIds" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.linkedAssociationIds"></a>

```typescript
public readonly linkedAssociationIds: string[];
```

- *Type:* string[]

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDevopsagentAssociationConfig <a name="DataAwsccDevopsagentAssociationConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

const dataAwsccDevopsagentAssociationConfig: dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/devopsagent_association#id DataAwsccDevopsagentAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDevopsagentAssociationConfiguration <a name="DataAwsccDevopsagentAssociationConfiguration" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfiguration.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

const dataAwsccDevopsagentAssociationConfiguration: dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfiguration = { ... }
```


### DataAwsccDevopsagentAssociationConfigurationAws <a name="DataAwsccDevopsagentAssociationConfigurationAws" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAws"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAws.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

const dataAwsccDevopsagentAssociationConfigurationAws: dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAws = { ... }
```


### DataAwsccDevopsagentAssociationConfigurationAwsResources <a name="DataAwsccDevopsagentAssociationConfigurationAwsResources" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResources.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

const dataAwsccDevopsagentAssociationConfigurationAwsResources: dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResources = { ... }
```


### DataAwsccDevopsagentAssociationConfigurationAwsTags <a name="DataAwsccDevopsagentAssociationConfigurationAwsTags" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTags.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

const dataAwsccDevopsagentAssociationConfigurationAwsTags: dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTags = { ... }
```


### DataAwsccDevopsagentAssociationConfigurationAzure <a name="DataAwsccDevopsagentAssociationConfigurationAzure" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzure.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

const dataAwsccDevopsagentAssociationConfigurationAzure: dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzure = { ... }
```


### DataAwsccDevopsagentAssociationConfigurationDynatrace <a name="DataAwsccDevopsagentAssociationConfigurationDynatrace" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatrace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatrace.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

const dataAwsccDevopsagentAssociationConfigurationDynatrace: dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatrace = { ... }
```


### DataAwsccDevopsagentAssociationConfigurationEventChannel <a name="DataAwsccDevopsagentAssociationConfigurationEventChannel" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannel.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

const dataAwsccDevopsagentAssociationConfigurationEventChannel: dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannel = { ... }
```


### DataAwsccDevopsagentAssociationConfigurationGitHub <a name="DataAwsccDevopsagentAssociationConfigurationGitHub" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHub.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

const dataAwsccDevopsagentAssociationConfigurationGitHub: dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHub = { ... }
```


### DataAwsccDevopsagentAssociationConfigurationGitLab <a name="DataAwsccDevopsagentAssociationConfigurationGitLab" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLab"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLab.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

const dataAwsccDevopsagentAssociationConfigurationGitLab: dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLab = { ... }
```


### DataAwsccDevopsagentAssociationConfigurationMcpServer <a name="DataAwsccDevopsagentAssociationConfigurationMcpServer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServer.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

const dataAwsccDevopsagentAssociationConfigurationMcpServer: dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServer = { ... }
```


### DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

const dataAwsccDevopsagentAssociationConfigurationMcpServerDatadog: dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog = { ... }
```


### DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

const dataAwsccDevopsagentAssociationConfigurationMcpServerGrafana: dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana = { ... }
```


### DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

const dataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic: dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic = { ... }
```


### DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4 <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

const dataAwsccDevopsagentAssociationConfigurationMcpServerSigV4: dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4 = { ... }
```


### DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

const dataAwsccDevopsagentAssociationConfigurationMcpServerSplunk: dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk = { ... }
```


### DataAwsccDevopsagentAssociationConfigurationPagerDuty <a name="DataAwsccDevopsagentAssociationConfigurationPagerDuty" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDuty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDuty.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

const dataAwsccDevopsagentAssociationConfigurationPagerDuty: dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDuty = { ... }
```


### DataAwsccDevopsagentAssociationConfigurationServiceNow <a name="DataAwsccDevopsagentAssociationConfigurationServiceNow" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNow.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

const dataAwsccDevopsagentAssociationConfigurationServiceNow: dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNow = { ... }
```


### DataAwsccDevopsagentAssociationConfigurationSlack <a name="DataAwsccDevopsagentAssociationConfigurationSlack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlack.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

const dataAwsccDevopsagentAssociationConfigurationSlack: dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlack = { ... }
```


### DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget <a name="DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

const dataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget: dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget = { ... }
```


### DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget <a name="DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

const dataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget: dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget = { ... }
```


### DataAwsccDevopsagentAssociationConfigurationSourceAws <a name="DataAwsccDevopsagentAssociationConfigurationSourceAws" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAws"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAws.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

const dataAwsccDevopsagentAssociationConfigurationSourceAws: dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAws = { ... }
```


### DataAwsccDevopsagentAssociationConfigurationSourceAwsResources <a name="DataAwsccDevopsagentAssociationConfigurationSourceAwsResources" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResources.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

const dataAwsccDevopsagentAssociationConfigurationSourceAwsResources: dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResources = { ... }
```


### DataAwsccDevopsagentAssociationConfigurationSourceAwsTags <a name="DataAwsccDevopsagentAssociationConfigurationSourceAwsTags" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTags.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

const dataAwsccDevopsagentAssociationConfigurationSourceAwsTags: dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDevopsagentAssociationConfigurationAwsOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationAwsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.accountType">accountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.assumableRoleArn">assumableRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList">DataAwsccDevopsagentAssociationConfigurationAwsResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList">DataAwsccDevopsagentAssociationConfigurationAwsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAws">DataAwsccDevopsagentAssociationConfigurationAws</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `accountType`<sup>Required</sup> <a name="accountType" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.accountType"></a>

```typescript
public readonly accountType: string;
```

- *Type:* string

---

##### `assumableRoleArn`<sup>Required</sup> <a name="assumableRoleArn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.assumableRoleArn"></a>

```typescript
public readonly assumableRoleArn: string;
```

- *Type:* string

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.resources"></a>

```typescript
public readonly resources: DataAwsccDevopsagentAssociationConfigurationAwsResourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList">DataAwsccDevopsagentAssociationConfigurationAwsResourcesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.tags"></a>

```typescript
public readonly tags: DataAwsccDevopsagentAssociationConfigurationAwsTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList">DataAwsccDevopsagentAssociationConfigurationAwsTagsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsagentAssociationConfigurationAws;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAws">DataAwsccDevopsagentAssociationConfigurationAws</a>

---


### DataAwsccDevopsagentAssociationConfigurationAwsResourcesList <a name="DataAwsccDevopsagentAssociationConfigurationAwsResourcesList" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.get"></a>

```typescript
public get(index: number): DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceMetadata">resourceMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResources">DataAwsccDevopsagentAssociationConfigurationAwsResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `resourceMetadata`<sup>Required</sup> <a name="resourceMetadata" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceMetadata"></a>

```typescript
public readonly resourceMetadata: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsagentAssociationConfigurationAwsResources;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResources">DataAwsccDevopsagentAssociationConfigurationAwsResources</a>

---


### DataAwsccDevopsagentAssociationConfigurationAwsTagsList <a name="DataAwsccDevopsagentAssociationConfigurationAwsTagsList" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.get"></a>

```typescript
public get(index: number): DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTags">DataAwsccDevopsagentAssociationConfigurationAwsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsagentAssociationConfigurationAwsTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTags">DataAwsccDevopsagentAssociationConfigurationAwsTags</a>

---


### DataAwsccDevopsagentAssociationConfigurationAzureOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationAzureOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzure">DataAwsccDevopsagentAssociationConfigurationAzure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsagentAssociationConfigurationAzure;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzure">DataAwsccDevopsagentAssociationConfigurationAzure</a>

---


### DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.envId">envId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatrace">DataAwsccDevopsagentAssociationConfigurationDynatrace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableWebhookUpdates`<sup>Required</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.enableWebhookUpdates"></a>

```typescript
public readonly enableWebhookUpdates: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.envId"></a>

```typescript
public readonly envId: string;
```

- *Type:* string

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsagentAssociationConfigurationDynatrace;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatrace">DataAwsccDevopsagentAssociationConfigurationDynatrace</a>

---


### DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannel">DataAwsccDevopsagentAssociationConfigurationEventChannel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableWebhookUpdates`<sup>Required</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.property.enableWebhookUpdates"></a>

```typescript
public readonly enableWebhookUpdates: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsagentAssociationConfigurationEventChannel;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannel">DataAwsccDevopsagentAssociationConfigurationEventChannel</a>

---


### DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.ownerType">ownerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.repoId">repoId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.repoName">repoName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHub">DataAwsccDevopsagentAssociationConfigurationGitHub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerType`<sup>Required</sup> <a name="ownerType" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.ownerType"></a>

```typescript
public readonly ownerType: string;
```

- *Type:* string

---

##### `repoId`<sup>Required</sup> <a name="repoId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.repoId"></a>

```typescript
public readonly repoId: string;
```

- *Type:* string

---

##### `repoName`<sup>Required</sup> <a name="repoName" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.repoName"></a>

```typescript
public readonly repoName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsagentAssociationConfigurationGitHub;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHub">DataAwsccDevopsagentAssociationConfigurationGitHub</a>

---


### DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.instanceIdentifier">instanceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.projectPath">projectPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLab">DataAwsccDevopsagentAssociationConfigurationGitLab</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableWebhookUpdates`<sup>Required</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.enableWebhookUpdates"></a>

```typescript
public readonly enableWebhookUpdates: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `instanceIdentifier`<sup>Required</sup> <a name="instanceIdentifier" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.instanceIdentifier"></a>

```typescript
public readonly instanceIdentifier: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `projectPath`<sup>Required</sup> <a name="projectPath" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.projectPath"></a>

```typescript
public readonly projectPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsagentAssociationConfigurationGitLab;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLab">DataAwsccDevopsagentAssociationConfigurationGitLab</a>

---


### DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog">DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enableWebhookUpdates`<sup>Required</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.enableWebhookUpdates"></a>

```typescript
public readonly enableWebhookUpdates: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog">DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog</a>

---


### DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.tools">tools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana">DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableWebhookUpdates`<sup>Required</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.enableWebhookUpdates"></a>

```typescript
public readonly enableWebhookUpdates: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.tools"></a>

```typescript
public readonly tools: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana">DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana</a>

---


### DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic">DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic">DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic</a>

---


### DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.tools">tools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServer">DataAwsccDevopsagentAssociationConfigurationMcpServer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enableWebhookUpdates`<sup>Required</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.enableWebhookUpdates"></a>

```typescript
public readonly enableWebhookUpdates: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.tools"></a>

```typescript
public readonly tools: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsagentAssociationConfigurationMcpServer;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServer">DataAwsccDevopsagentAssociationConfigurationMcpServer</a>

---


### DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.tools">tools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4">DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.tools"></a>

```typescript
public readonly tools: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4">DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4</a>

---


### DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk">DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enableWebhookUpdates`<sup>Required</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.enableWebhookUpdates"></a>

```typescript
public readonly enableWebhookUpdates: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk">DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk</a>

---


### DataAwsccDevopsagentAssociationConfigurationOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.aws">aws</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference">DataAwsccDevopsagentAssociationConfigurationAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.azure">azure</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference">DataAwsccDevopsagentAssociationConfigurationAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.dynatrace">dynatrace</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference">DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.eventChannel">eventChannel</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference">DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.gitHub">gitHub</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference">DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.gitLab">gitLab</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference">DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServer">mcpServer</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServerDatadog">mcpServerDatadog</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServerGrafana">mcpServerGrafana</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServerNewRelic">mcpServerNewRelic</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServerSigV4">mcpServerSigV4</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServerSplunk">mcpServerSplunk</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.pagerDuty">pagerDuty</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference">DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.serviceNow">serviceNow</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference">DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference">DataAwsccDevopsagentAssociationConfigurationSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.sourceAws">sourceAws</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference">DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfiguration">DataAwsccDevopsagentAssociationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.aws"></a>

```typescript
public readonly aws: DataAwsccDevopsagentAssociationConfigurationAwsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference">DataAwsccDevopsagentAssociationConfigurationAwsOutputReference</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.azure"></a>

```typescript
public readonly azure: DataAwsccDevopsagentAssociationConfigurationAzureOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference">DataAwsccDevopsagentAssociationConfigurationAzureOutputReference</a>

---

##### `dynatrace`<sup>Required</sup> <a name="dynatrace" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.dynatrace"></a>

```typescript
public readonly dynatrace: DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference">DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference</a>

---

##### `eventChannel`<sup>Required</sup> <a name="eventChannel" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.eventChannel"></a>

```typescript
public readonly eventChannel: DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference">DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference</a>

---

##### `gitHub`<sup>Required</sup> <a name="gitHub" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.gitHub"></a>

```typescript
public readonly gitHub: DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference">DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference</a>

---

##### `gitLab`<sup>Required</sup> <a name="gitLab" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.gitLab"></a>

```typescript
public readonly gitLab: DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference">DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference</a>

---

##### `mcpServer`<sup>Required</sup> <a name="mcpServer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServer"></a>

```typescript
public readonly mcpServer: DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference</a>

---

##### `mcpServerDatadog`<sup>Required</sup> <a name="mcpServerDatadog" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServerDatadog"></a>

```typescript
public readonly mcpServerDatadog: DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference</a>

---

##### `mcpServerGrafana`<sup>Required</sup> <a name="mcpServerGrafana" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServerGrafana"></a>

```typescript
public readonly mcpServerGrafana: DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference</a>

---

##### `mcpServerNewRelic`<sup>Required</sup> <a name="mcpServerNewRelic" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServerNewRelic"></a>

```typescript
public readonly mcpServerNewRelic: DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference</a>

---

##### `mcpServerSigV4`<sup>Required</sup> <a name="mcpServerSigV4" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServerSigV4"></a>

```typescript
public readonly mcpServerSigV4: DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference</a>

---

##### `mcpServerSplunk`<sup>Required</sup> <a name="mcpServerSplunk" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServerSplunk"></a>

```typescript
public readonly mcpServerSplunk: DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference</a>

---

##### `pagerDuty`<sup>Required</sup> <a name="pagerDuty" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.pagerDuty"></a>

```typescript
public readonly pagerDuty: DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference">DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference</a>

---

##### `serviceNow`<sup>Required</sup> <a name="serviceNow" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.serviceNow"></a>

```typescript
public readonly serviceNow: DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference">DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference</a>

---

##### `slack`<sup>Required</sup> <a name="slack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.slack"></a>

```typescript
public readonly slack: DataAwsccDevopsagentAssociationConfigurationSlackOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference">DataAwsccDevopsagentAssociationConfigurationSlackOutputReference</a>

---

##### `sourceAws`<sup>Required</sup> <a name="sourceAws" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.sourceAws"></a>

```typescript
public readonly sourceAws: DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference">DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsagentAssociationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfiguration">DataAwsccDevopsagentAssociationConfiguration</a>

---


### DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.customerEmail">customerEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.services">services</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDuty">DataAwsccDevopsagentAssociationConfigurationPagerDuty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerEmail`<sup>Required</sup> <a name="customerEmail" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.customerEmail"></a>

```typescript
public readonly customerEmail: string;
```

- *Type:* string

---

##### `enableWebhookUpdates`<sup>Required</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.enableWebhookUpdates"></a>

```typescript
public readonly enableWebhookUpdates: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.services"></a>

```typescript
public readonly services: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsagentAssociationConfigurationPagerDuty;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDuty">DataAwsccDevopsagentAssociationConfigurationPagerDuty</a>

---


### DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNow">DataAwsccDevopsagentAssociationConfigurationServiceNow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableWebhookUpdates`<sup>Required</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.property.enableWebhookUpdates"></a>

```typescript
public readonly enableWebhookUpdates: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsagentAssociationConfigurationServiceNow;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNow">DataAwsccDevopsagentAssociationConfigurationServiceNow</a>

---


### DataAwsccDevopsagentAssociationConfigurationSlackOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationSlackOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.transmissionTarget">transmissionTarget</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference">DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.workspaceName">workspaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlack">DataAwsccDevopsagentAssociationConfigurationSlack</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `transmissionTarget`<sup>Required</sup> <a name="transmissionTarget" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.transmissionTarget"></a>

```typescript
public readonly transmissionTarget: DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference">DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference</a>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `workspaceName`<sup>Required</sup> <a name="workspaceName" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.workspaceName"></a>

```typescript
public readonly workspaceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsagentAssociationConfigurationSlack;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlack">DataAwsccDevopsagentAssociationConfigurationSlack</a>

---


### DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelName">channelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a>

---


### DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.incidentResponseTarget">incidentResponseTarget</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference">DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget">DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `incidentResponseTarget`<sup>Required</sup> <a name="incidentResponseTarget" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.incidentResponseTarget"></a>

```typescript
public readonly incidentResponseTarget: DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference">DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget">DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget</a>

---


### DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountType">accountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.assumableRoleArn">assumableRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList">DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList">DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAws">DataAwsccDevopsagentAssociationConfigurationSourceAws</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `accountType`<sup>Required</sup> <a name="accountType" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountType"></a>

```typescript
public readonly accountType: string;
```

- *Type:* string

---

##### `assumableRoleArn`<sup>Required</sup> <a name="assumableRoleArn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.assumableRoleArn"></a>

```typescript
public readonly assumableRoleArn: string;
```

- *Type:* string

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.resources"></a>

```typescript
public readonly resources: DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList">DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.tags"></a>

```typescript
public readonly tags: DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList">DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsagentAssociationConfigurationSourceAws;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAws">DataAwsccDevopsagentAssociationConfigurationSourceAws</a>

---


### DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList <a name="DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.get"></a>

```typescript
public get(index: number): DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceMetadata">resourceMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResources">DataAwsccDevopsagentAssociationConfigurationSourceAwsResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `resourceMetadata`<sup>Required</sup> <a name="resourceMetadata" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceMetadata"></a>

```typescript
public readonly resourceMetadata: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsagentAssociationConfigurationSourceAwsResources;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResources">DataAwsccDevopsagentAssociationConfigurationSourceAwsResources</a>

---


### DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList <a name="DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.get"></a>

```typescript
public get(index: number): DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAssociation } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTags">DataAwsccDevopsagentAssociationConfigurationSourceAwsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsagentAssociationConfigurationSourceAwsTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTags">DataAwsccDevopsagentAssociationConfigurationSourceAwsTags</a>

---



