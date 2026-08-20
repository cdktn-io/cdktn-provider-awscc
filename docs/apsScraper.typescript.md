# `apsScraper` Submodule <a name="`apsScraper` Submodule" id="@cdktn/provider-awscc.apsScraper"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApsScraper <a name="ApsScraper" id="@cdktn/provider-awscc.apsScraper.ApsScraper"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper awscc_aps_scraper}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

new apsScraper.ApsScraper(scope: Construct, id: string, config: ApsScraperConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig">ApsScraperConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig">ApsScraperConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.putRoleConfiguration">putRoleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.putScrapeConfiguration">putScrapeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.putScraperLoggingConfiguration">putScraperLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.resetRoleConfiguration">resetRoleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.resetScraperLoggingConfiguration">resetScraperLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsScraper.ApsScraper.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apsScraper.ApsScraper.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apsScraper.ApsScraper.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apsScraper.ApsScraper.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apsScraper.ApsScraper.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsScraper.ApsScraper.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apsScraper.ApsScraper.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apsScraper.ApsScraper.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apsScraper.ApsScraper.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apsScraper.ApsScraper.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apsScraper.ApsScraper.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apsScraper.ApsScraper.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apsScraper.ApsScraper.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apsScraper.ApsScraper.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apsScraper.ApsScraper.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apsScraper.ApsScraper.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsScraper.ApsScraper.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsScraper.ApsScraper.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apsScraper.ApsScraper.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsScraper.ApsScraper.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apsScraper.ApsScraper.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apsScraper.ApsScraper.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apsScraper.ApsScraper.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apsScraper.ApsScraper.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsScraper.ApsScraper.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestination` <a name="putDestination" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putDestination"></a>

```typescript
public putDestination(value: ApsScraperDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestination">ApsScraperDestination</a>

---

##### `putRoleConfiguration` <a name="putRoleConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putRoleConfiguration"></a>

```typescript
public putRoleConfiguration(value: ApsScraperRoleConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putRoleConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration">ApsScraperRoleConfiguration</a>

---

##### `putScrapeConfiguration` <a name="putScrapeConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putScrapeConfiguration"></a>

```typescript
public putScrapeConfiguration(value: ApsScraperScrapeConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putScrapeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration">ApsScraperScrapeConfiguration</a>

---

##### `putScraperLoggingConfiguration` <a name="putScraperLoggingConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putScraperLoggingConfiguration"></a>

```typescript
public putScraperLoggingConfiguration(value: ApsScraperScraperLoggingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putScraperLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration">ApsScraperScraperLoggingConfiguration</a>

---

##### `putSource` <a name="putSource" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putSource"></a>

```typescript
public putSource(value: ApsScraperSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSource">ApsScraperSource</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putTags"></a>

```typescript
public putTags(value: IResolvable | ApsScraperTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags">ApsScraperTags</a>[]

---

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-awscc.apsScraper.ApsScraper.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetRoleConfiguration` <a name="resetRoleConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.resetRoleConfiguration"></a>

```typescript
public resetRoleConfiguration(): void
```

##### `resetScraperLoggingConfiguration` <a name="resetScraperLoggingConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.resetScraperLoggingConfiguration"></a>

```typescript
public resetScraperLoggingConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.apsScraper.ApsScraper.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApsScraper resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apsScraper.ApsScraper.isConstruct"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

apsScraper.ApsScraper.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apsScraper.ApsScraper.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apsScraper.ApsScraper.isTerraformElement"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

apsScraper.ApsScraper.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apsScraper.ApsScraper.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraper.isTerraformResource"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

apsScraper.ApsScraper.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apsScraper.ApsScraper.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apsScraper.ApsScraper.generateConfigForImport"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

apsScraper.ApsScraper.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApsScraper resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apsScraper.ApsScraper.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apsScraper.ApsScraper.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApsScraper to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apsScraper.ApsScraper.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApsScraper that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsScraper.ApsScraper.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApsScraper to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference">ApsScraperDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.roleConfiguration">roleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference">ApsScraperRoleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.scrapeConfiguration">scrapeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference">ApsScraperScrapeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.scraperId">scraperId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.scraperLoggingConfiguration">scraperLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference">ApsScraperScraperLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference">ApsScraperSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList">ApsScraperTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.destinationInput">destinationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestination">ApsScraperDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.roleConfigurationInput">roleConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration">ApsScraperRoleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.scrapeConfigurationInput">scrapeConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration">ApsScraperScrapeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.scraperLoggingConfigurationInput">scraperLoggingConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration">ApsScraperScraperLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.sourceInput">sourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSource">ApsScraperSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags">ApsScraperTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.alias">alias</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.destination"></a>

```typescript
public readonly destination: ApsScraperDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference">ApsScraperDestinationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `roleConfiguration`<sup>Required</sup> <a name="roleConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.roleConfiguration"></a>

```typescript
public readonly roleConfiguration: ApsScraperRoleConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference">ApsScraperRoleConfigurationOutputReference</a>

---

##### `scrapeConfiguration`<sup>Required</sup> <a name="scrapeConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.scrapeConfiguration"></a>

```typescript
public readonly scrapeConfiguration: ApsScraperScrapeConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference">ApsScraperScrapeConfigurationOutputReference</a>

---

##### `scraperId`<sup>Required</sup> <a name="scraperId" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.scraperId"></a>

```typescript
public readonly scraperId: string;
```

- *Type:* string

---

##### `scraperLoggingConfiguration`<sup>Required</sup> <a name="scraperLoggingConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.scraperLoggingConfiguration"></a>

```typescript
public readonly scraperLoggingConfiguration: ApsScraperScraperLoggingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference">ApsScraperScraperLoggingConfigurationOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.source"></a>

```typescript
public readonly source: ApsScraperSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference">ApsScraperSourceOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.tags"></a>

```typescript
public readonly tags: ApsScraperTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList">ApsScraperTagsList</a>

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.destinationInput"></a>

```typescript
public readonly destinationInput: IResolvable | ApsScraperDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestination">ApsScraperDestination</a>

---

##### `roleConfigurationInput`<sup>Optional</sup> <a name="roleConfigurationInput" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.roleConfigurationInput"></a>

```typescript
public readonly roleConfigurationInput: IResolvable | ApsScraperRoleConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration">ApsScraperRoleConfiguration</a>

---

##### `scrapeConfigurationInput`<sup>Optional</sup> <a name="scrapeConfigurationInput" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.scrapeConfigurationInput"></a>

```typescript
public readonly scrapeConfigurationInput: IResolvable | ApsScraperScrapeConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration">ApsScraperScrapeConfiguration</a>

---

##### `scraperLoggingConfigurationInput`<sup>Optional</sup> <a name="scraperLoggingConfigurationInput" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.scraperLoggingConfigurationInput"></a>

```typescript
public readonly scraperLoggingConfigurationInput: IResolvable | ApsScraperScraperLoggingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration">ApsScraperScraperLoggingConfiguration</a>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.sourceInput"></a>

```typescript
public readonly sourceInput: IResolvable | ApsScraperSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSource">ApsScraperSource</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ApsScraperTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags">ApsScraperTags</a>[]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApsScraperConfig <a name="ApsScraperConfig" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

const apsScraperConfig: apsScraper.ApsScraperConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestination">ApsScraperDestination</a></code> | Scraper metrics destination. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.scrapeConfiguration">scrapeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration">ApsScraperScrapeConfiguration</a></code> | Scraper configuration. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSource">ApsScraperSource</a></code> | Scraper metrics source. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.alias">alias</a></code> | <code>string</code> | Scraper alias. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.roleConfiguration">roleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration">ApsScraperRoleConfiguration</a></code> | Role configuration. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.scraperLoggingConfiguration">scraperLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration">ApsScraperScraperLoggingConfiguration</a></code> | Configuration for scraper logging. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags">ApsScraperTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.destination"></a>

```typescript
public readonly destination: ApsScraperDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestination">ApsScraperDestination</a>

Scraper metrics destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#destination ApsScraper#destination}

---

##### `scrapeConfiguration`<sup>Required</sup> <a name="scrapeConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.scrapeConfiguration"></a>

```typescript
public readonly scrapeConfiguration: ApsScraperScrapeConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration">ApsScraperScrapeConfiguration</a>

Scraper configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#scrape_configuration ApsScraper#scrape_configuration}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.source"></a>

```typescript
public readonly source: ApsScraperSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSource">ApsScraperSource</a>

Scraper metrics source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#source ApsScraper#source}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Scraper alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#alias ApsScraper#alias}

---

##### `roleConfiguration`<sup>Optional</sup> <a name="roleConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.roleConfiguration"></a>

```typescript
public readonly roleConfiguration: ApsScraperRoleConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration">ApsScraperRoleConfiguration</a>

Role configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#role_configuration ApsScraper#role_configuration}

---

##### `scraperLoggingConfiguration`<sup>Optional</sup> <a name="scraperLoggingConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.scraperLoggingConfiguration"></a>

```typescript
public readonly scraperLoggingConfiguration: ApsScraperScraperLoggingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration">ApsScraperScraperLoggingConfiguration</a>

Configuration for scraper logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#scraper_logging_configuration ApsScraper#scraper_logging_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ApsScraperTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags">ApsScraperTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#tags ApsScraper#tags}

---

### ApsScraperDestination <a name="ApsScraperDestination" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestination.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

const apsScraperDestination: apsScraper.ApsScraperDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestination.property.ampConfiguration">ampConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration">ApsScraperDestinationAmpConfiguration</a></code> | Configuration for Amazon Managed Prometheus metrics destination. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestination.property.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration">ApsScraperDestinationCloudwatchConfiguration</a></code> | Configuration for CloudWatch metrics destination. |

---

##### `ampConfiguration`<sup>Optional</sup> <a name="ampConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestination.property.ampConfiguration"></a>

```typescript
public readonly ampConfiguration: ApsScraperDestinationAmpConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration">ApsScraperDestinationAmpConfiguration</a>

Configuration for Amazon Managed Prometheus metrics destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#amp_configuration ApsScraper#amp_configuration}

---

##### `cloudwatchConfiguration`<sup>Optional</sup> <a name="cloudwatchConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestination.property.cloudwatchConfiguration"></a>

```typescript
public readonly cloudwatchConfiguration: ApsScraperDestinationCloudwatchConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration">ApsScraperDestinationCloudwatchConfiguration</a>

Configuration for CloudWatch metrics destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#cloudwatch_configuration ApsScraper#cloudwatch_configuration}

---

### ApsScraperDestinationAmpConfiguration <a name="ApsScraperDestinationAmpConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

const apsScraperDestinationAmpConfiguration: apsScraper.ApsScraperDestinationAmpConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration.property.workspaceArn">workspaceArn</a></code> | <code>string</code> | ARN of an Amazon Managed Prometheus workspace. |

---

##### `workspaceArn`<sup>Optional</sup> <a name="workspaceArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration.property.workspaceArn"></a>

```typescript
public readonly workspaceArn: string;
```

- *Type:* string

ARN of an Amazon Managed Prometheus workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#workspace_arn ApsScraper#workspace_arn}

---

### ApsScraperDestinationCloudwatchConfiguration <a name="ApsScraperDestinationCloudwatchConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

const apsScraperDestinationCloudwatchConfiguration: apsScraper.ApsScraperDestinationCloudwatchConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration.property.datasetArn">datasetArn</a></code> | <code>string</code> | ARN of a CloudWatch dataset. |

---

##### `datasetArn`<sup>Optional</sup> <a name="datasetArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration.property.datasetArn"></a>

```typescript
public readonly datasetArn: string;
```

- *Type:* string

ARN of a CloudWatch dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#dataset_arn ApsScraper#dataset_arn}

---

### ApsScraperRoleConfiguration <a name="ApsScraperRoleConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

const apsScraperRoleConfiguration: apsScraper.ApsScraperRoleConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration.property.sourceRoleArn">sourceRoleArn</a></code> | <code>string</code> | IAM Role in source account. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration.property.targetRoleArn">targetRoleArn</a></code> | <code>string</code> | IAM Role in the target account. |

---

##### `sourceRoleArn`<sup>Optional</sup> <a name="sourceRoleArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration.property.sourceRoleArn"></a>

```typescript
public readonly sourceRoleArn: string;
```

- *Type:* string

IAM Role in source account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#source_role_arn ApsScraper#source_role_arn}

---

##### `targetRoleArn`<sup>Optional</sup> <a name="targetRoleArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration.property.targetRoleArn"></a>

```typescript
public readonly targetRoleArn: string;
```

- *Type:* string

IAM Role in the target account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#target_role_arn ApsScraper#target_role_arn}

---

### ApsScraperScrapeConfiguration <a name="ApsScraperScrapeConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

const apsScraperScrapeConfiguration: apsScraper.ApsScraperScrapeConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration.property.configurationBlob">configurationBlob</a></code> | <code>string</code> | Prometheus compatible scrape configuration in base64 encoded blob format. |

---

##### `configurationBlob`<sup>Optional</sup> <a name="configurationBlob" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration.property.configurationBlob"></a>

```typescript
public readonly configurationBlob: string;
```

- *Type:* string

Prometheus compatible scrape configuration in base64 encoded blob format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#configuration_blob ApsScraper#configuration_blob}

---

### ApsScraperScraperLoggingConfiguration <a name="ApsScraperScraperLoggingConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

const apsScraperScraperLoggingConfiguration: apsScraper.ApsScraperScraperLoggingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration.property.loggingDestination">loggingDestination</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination">ApsScraperScraperLoggingConfigurationLoggingDestination</a></code> | Destination for scraper logging. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration.property.scraperComponents">scraperComponents</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents">ApsScraperScraperLoggingConfigurationScraperComponents</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#scraper_components ApsScraper#scraper_components}. |

---

##### `loggingDestination`<sup>Optional</sup> <a name="loggingDestination" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration.property.loggingDestination"></a>

```typescript
public readonly loggingDestination: ApsScraperScraperLoggingConfigurationLoggingDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination">ApsScraperScraperLoggingConfigurationLoggingDestination</a>

Destination for scraper logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#logging_destination ApsScraper#logging_destination}

---

##### `scraperComponents`<sup>Optional</sup> <a name="scraperComponents" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration.property.scraperComponents"></a>

```typescript
public readonly scraperComponents: IResolvable | ApsScraperScraperLoggingConfigurationScraperComponents[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents">ApsScraperScraperLoggingConfigurationScraperComponents</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#scraper_components ApsScraper#scraper_components}.

---

### ApsScraperScraperLoggingConfigurationLoggingDestination <a name="ApsScraperScraperLoggingConfigurationLoggingDestination" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

const apsScraperScraperLoggingConfigurationLoggingDestination: apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a></code> | Represents a cloudwatch logs destination for scraper logging. |

---

##### `cloudwatchLogs`<sup>Optional</sup> <a name="cloudwatchLogs" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>

Represents a cloudwatch logs destination for scraper logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#cloudwatch_logs ApsScraper#cloudwatch_logs}

---

### ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs <a name="ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

const apsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs: apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | ARN of the CloudWatch log group. |

---

##### `logGroupArn`<sup>Optional</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

ARN of the CloudWatch log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#log_group_arn ApsScraper#log_group_arn}

---

### ApsScraperScraperLoggingConfigurationScraperComponents <a name="ApsScraperScraperLoggingConfigurationScraperComponents" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

const apsScraperScraperLoggingConfigurationScraperComponents: apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents.property.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig">ApsScraperScraperLoggingConfigurationScraperComponentsConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#config ApsScraper#config}. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents.property.type">type</a></code> | <code>string</code> | Type of scraper component. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents.property.config"></a>

```typescript
public readonly config: ApsScraperScraperLoggingConfigurationScraperComponentsConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig">ApsScraperScraperLoggingConfigurationScraperComponentsConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#config ApsScraper#config}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of scraper component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#type ApsScraper#type}

---

### ApsScraperScraperLoggingConfigurationScraperComponentsConfig <a name="ApsScraperScraperLoggingConfigurationScraperComponentsConfig" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

const apsScraperScraperLoggingConfigurationScraperComponentsConfig: apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#options ApsScraper#options}. |

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#options ApsScraper#options}.

---

### ApsScraperSource <a name="ApsScraperSource" id="@cdktn/provider-awscc.apsScraper.ApsScraperSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperSource.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

const apsScraperSource: apsScraper.ApsScraperSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSource.property.eksConfiguration">eksConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration">ApsScraperSourceEksConfiguration</a></code> | Configuration for EKS metrics source. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSource.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration">ApsScraperSourceVpcConfiguration</a></code> | Configuration for VPC metrics source. |

---

##### `eksConfiguration`<sup>Optional</sup> <a name="eksConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperSource.property.eksConfiguration"></a>

```typescript
public readonly eksConfiguration: ApsScraperSourceEksConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration">ApsScraperSourceEksConfiguration</a>

Configuration for EKS metrics source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#eks_configuration ApsScraper#eks_configuration}

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="vpcConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperSource.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: ApsScraperSourceVpcConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration">ApsScraperSourceVpcConfiguration</a>

Configuration for VPC metrics source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#vpc_configuration ApsScraper#vpc_configuration}

---

### ApsScraperSourceEksConfiguration <a name="ApsScraperSourceEksConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

const apsScraperSourceEksConfiguration: apsScraper.ApsScraperSourceEksConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration.property.clusterArn">clusterArn</a></code> | <code>string</code> | ARN of an EKS cluster. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | List of security group IDs. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | List of subnet IDs. |

---

##### `clusterArn`<sup>Optional</sup> <a name="clusterArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

ARN of an EKS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#cluster_arn ApsScraper#cluster_arn}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

List of security group IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#security_group_ids ApsScraper#security_group_ids}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

List of subnet IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#subnet_ids ApsScraper#subnet_ids}

---

### ApsScraperSourceVpcConfiguration <a name="ApsScraperSourceVpcConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

const apsScraperSourceVpcConfiguration: apsScraper.ApsScraperSourceVpcConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | List of security group IDs. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | List of subnet IDs. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

List of security group IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#security_group_ids ApsScraper#security_group_ids}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

List of subnet IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#subnet_ids ApsScraper#subnet_ids}

---

### ApsScraperTags <a name="ApsScraperTags" id="@cdktn/provider-awscc.apsScraper.ApsScraperTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperTags.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

const apsScraperTags: apsScraper.ApsScraperTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apsScraper.ApsScraperTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#key ApsScraper#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apsScraper.ApsScraperTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#value ApsScraper#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ApsScraperDestinationAmpConfigurationOutputReference <a name="ApsScraperDestinationAmpConfigurationOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

new apsScraper.ApsScraperDestinationAmpConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.resetWorkspaceArn">resetWorkspaceArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceArn` <a name="resetWorkspaceArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.resetWorkspaceArn"></a>

```typescript
public resetWorkspaceArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.property.workspaceArnInput">workspaceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.property.workspaceArn">workspaceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration">ApsScraperDestinationAmpConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceArnInput`<sup>Optional</sup> <a name="workspaceArnInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.property.workspaceArnInput"></a>

```typescript
public readonly workspaceArnInput: string;
```

- *Type:* string

---

##### `workspaceArn`<sup>Required</sup> <a name="workspaceArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.property.workspaceArn"></a>

```typescript
public readonly workspaceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApsScraperDestinationAmpConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration">ApsScraperDestinationAmpConfiguration</a>

---


### ApsScraperDestinationCloudwatchConfigurationOutputReference <a name="ApsScraperDestinationCloudwatchConfigurationOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

new apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.resetDatasetArn">resetDatasetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatasetArn` <a name="resetDatasetArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.resetDatasetArn"></a>

```typescript
public resetDatasetArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.property.datasetArnInput">datasetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.property.datasetArn">datasetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration">ApsScraperDestinationCloudwatchConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetArnInput`<sup>Optional</sup> <a name="datasetArnInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.property.datasetArnInput"></a>

```typescript
public readonly datasetArnInput: string;
```

- *Type:* string

---

##### `datasetArn`<sup>Required</sup> <a name="datasetArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.property.datasetArn"></a>

```typescript
public readonly datasetArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApsScraperDestinationCloudwatchConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration">ApsScraperDestinationCloudwatchConfiguration</a>

---


### ApsScraperDestinationOutputReference <a name="ApsScraperDestinationOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

new apsScraper.ApsScraperDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.putAmpConfiguration">putAmpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.putCloudwatchConfiguration">putCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.resetAmpConfiguration">resetAmpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.resetCloudwatchConfiguration">resetCloudwatchConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmpConfiguration` <a name="putAmpConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.putAmpConfiguration"></a>

```typescript
public putAmpConfiguration(value: ApsScraperDestinationAmpConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.putAmpConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration">ApsScraperDestinationAmpConfiguration</a>

---

##### `putCloudwatchConfiguration` <a name="putCloudwatchConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.putCloudwatchConfiguration"></a>

```typescript
public putCloudwatchConfiguration(value: ApsScraperDestinationCloudwatchConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.putCloudwatchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration">ApsScraperDestinationCloudwatchConfiguration</a>

---

##### `resetAmpConfiguration` <a name="resetAmpConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.resetAmpConfiguration"></a>

```typescript
public resetAmpConfiguration(): void
```

##### `resetCloudwatchConfiguration` <a name="resetCloudwatchConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.resetCloudwatchConfiguration"></a>

```typescript
public resetCloudwatchConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.ampConfiguration">ampConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference">ApsScraperDestinationAmpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference">ApsScraperDestinationCloudwatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.ampConfigurationInput">ampConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration">ApsScraperDestinationAmpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.cloudwatchConfigurationInput">cloudwatchConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration">ApsScraperDestinationCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestination">ApsScraperDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ampConfiguration`<sup>Required</sup> <a name="ampConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.ampConfiguration"></a>

```typescript
public readonly ampConfiguration: ApsScraperDestinationAmpConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference">ApsScraperDestinationAmpConfigurationOutputReference</a>

---

##### `cloudwatchConfiguration`<sup>Required</sup> <a name="cloudwatchConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.cloudwatchConfiguration"></a>

```typescript
public readonly cloudwatchConfiguration: ApsScraperDestinationCloudwatchConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference">ApsScraperDestinationCloudwatchConfigurationOutputReference</a>

---

##### `ampConfigurationInput`<sup>Optional</sup> <a name="ampConfigurationInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.ampConfigurationInput"></a>

```typescript
public readonly ampConfigurationInput: IResolvable | ApsScraperDestinationAmpConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration">ApsScraperDestinationAmpConfiguration</a>

---

##### `cloudwatchConfigurationInput`<sup>Optional</sup> <a name="cloudwatchConfigurationInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.cloudwatchConfigurationInput"></a>

```typescript
public readonly cloudwatchConfigurationInput: IResolvable | ApsScraperDestinationCloudwatchConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration">ApsScraperDestinationCloudwatchConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApsScraperDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestination">ApsScraperDestination</a>

---


### ApsScraperRoleConfigurationOutputReference <a name="ApsScraperRoleConfigurationOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

new apsScraper.ApsScraperRoleConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.resetSourceRoleArn">resetSourceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.resetTargetRoleArn">resetTargetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceRoleArn` <a name="resetSourceRoleArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.resetSourceRoleArn"></a>

```typescript
public resetSourceRoleArn(): void
```

##### `resetTargetRoleArn` <a name="resetTargetRoleArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.resetTargetRoleArn"></a>

```typescript
public resetTargetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.sourceRoleArnInput">sourceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.targetRoleArnInput">targetRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.sourceRoleArn">sourceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.targetRoleArn">targetRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration">ApsScraperRoleConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceRoleArnInput`<sup>Optional</sup> <a name="sourceRoleArnInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.sourceRoleArnInput"></a>

```typescript
public readonly sourceRoleArnInput: string;
```

- *Type:* string

---

##### `targetRoleArnInput`<sup>Optional</sup> <a name="targetRoleArnInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.targetRoleArnInput"></a>

```typescript
public readonly targetRoleArnInput: string;
```

- *Type:* string

---

##### `sourceRoleArn`<sup>Required</sup> <a name="sourceRoleArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.sourceRoleArn"></a>

```typescript
public readonly sourceRoleArn: string;
```

- *Type:* string

---

##### `targetRoleArn`<sup>Required</sup> <a name="targetRoleArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.targetRoleArn"></a>

```typescript
public readonly targetRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApsScraperRoleConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration">ApsScraperRoleConfiguration</a>

---


### ApsScraperScrapeConfigurationOutputReference <a name="ApsScraperScrapeConfigurationOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

new apsScraper.ApsScraperScrapeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.resetConfigurationBlob">resetConfigurationBlob</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfigurationBlob` <a name="resetConfigurationBlob" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.resetConfigurationBlob"></a>

```typescript
public resetConfigurationBlob(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.property.configurationBlobInput">configurationBlobInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.property.configurationBlob">configurationBlob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration">ApsScraperScrapeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configurationBlobInput`<sup>Optional</sup> <a name="configurationBlobInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.property.configurationBlobInput"></a>

```typescript
public readonly configurationBlobInput: string;
```

- *Type:* string

---

##### `configurationBlob`<sup>Required</sup> <a name="configurationBlob" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.property.configurationBlob"></a>

```typescript
public readonly configurationBlob: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApsScraperScrapeConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration">ApsScraperScrapeConfiguration</a>

---


### ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference <a name="ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

new apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.resetLogGroupArn">resetLogGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroupArn` <a name="resetLogGroupArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.resetLogGroupArn"></a>

```typescript
public resetLogGroupArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.logGroupArnInput">logGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupArnInput`<sup>Optional</sup> <a name="logGroupArnInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.logGroupArnInput"></a>

```typescript
public readonly logGroupArnInput: string;
```

- *Type:* string

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>

---


### ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference <a name="ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

new apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.putCloudwatchLogs">putCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.resetCloudwatchLogs">resetCloudwatchLogs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogs` <a name="putCloudwatchLogs" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.putCloudwatchLogs"></a>

```typescript
public putCloudwatchLogs(value: ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>

---

##### `resetCloudwatchLogs` <a name="resetCloudwatchLogs" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.resetCloudwatchLogs"></a>

```typescript
public resetCloudwatchLogs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference">ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.cloudwatchLogsInput">cloudwatchLogsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination">ApsScraperScraperLoggingConfigurationLoggingDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference">ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference</a>

---

##### `cloudwatchLogsInput`<sup>Optional</sup> <a name="cloudwatchLogsInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.cloudwatchLogsInput"></a>

```typescript
public readonly cloudwatchLogsInput: IResolvable | ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApsScraperScraperLoggingConfigurationLoggingDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination">ApsScraperScraperLoggingConfigurationLoggingDestination</a>

---


### ApsScraperScraperLoggingConfigurationOutputReference <a name="ApsScraperScraperLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

new apsScraper.ApsScraperScraperLoggingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.putLoggingDestination">putLoggingDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.putScraperComponents">putScraperComponents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.resetLoggingDestination">resetLoggingDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.resetScraperComponents">resetScraperComponents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLoggingDestination` <a name="putLoggingDestination" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.putLoggingDestination"></a>

```typescript
public putLoggingDestination(value: ApsScraperScraperLoggingConfigurationLoggingDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.putLoggingDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination">ApsScraperScraperLoggingConfigurationLoggingDestination</a>

---

##### `putScraperComponents` <a name="putScraperComponents" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.putScraperComponents"></a>

```typescript
public putScraperComponents(value: IResolvable | ApsScraperScraperLoggingConfigurationScraperComponents[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.putScraperComponents.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents">ApsScraperScraperLoggingConfigurationScraperComponents</a>[]

---

##### `resetLoggingDestination` <a name="resetLoggingDestination" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.resetLoggingDestination"></a>

```typescript
public resetLoggingDestination(): void
```

##### `resetScraperComponents` <a name="resetScraperComponents" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.resetScraperComponents"></a>

```typescript
public resetScraperComponents(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.loggingDestination">loggingDestination</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference">ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.scraperComponents">scraperComponents</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList">ApsScraperScraperLoggingConfigurationScraperComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.loggingDestinationInput">loggingDestinationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination">ApsScraperScraperLoggingConfigurationLoggingDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.scraperComponentsInput">scraperComponentsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents">ApsScraperScraperLoggingConfigurationScraperComponents</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration">ApsScraperScraperLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `loggingDestination`<sup>Required</sup> <a name="loggingDestination" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.loggingDestination"></a>

```typescript
public readonly loggingDestination: ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference">ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference</a>

---

##### `scraperComponents`<sup>Required</sup> <a name="scraperComponents" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.scraperComponents"></a>

```typescript
public readonly scraperComponents: ApsScraperScraperLoggingConfigurationScraperComponentsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList">ApsScraperScraperLoggingConfigurationScraperComponentsList</a>

---

##### `loggingDestinationInput`<sup>Optional</sup> <a name="loggingDestinationInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.loggingDestinationInput"></a>

```typescript
public readonly loggingDestinationInput: IResolvable | ApsScraperScraperLoggingConfigurationLoggingDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination">ApsScraperScraperLoggingConfigurationLoggingDestination</a>

---

##### `scraperComponentsInput`<sup>Optional</sup> <a name="scraperComponentsInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.scraperComponentsInput"></a>

```typescript
public readonly scraperComponentsInput: IResolvable | ApsScraperScraperLoggingConfigurationScraperComponents[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents">ApsScraperScraperLoggingConfigurationScraperComponents</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApsScraperScraperLoggingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration">ApsScraperScraperLoggingConfiguration</a>

---


### ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference <a name="ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

new apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.resetOptions">resetOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOptions` <a name="resetOptions" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.resetOptions"></a>

```typescript
public resetOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.optionsInput">optionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig">ApsScraperScraperLoggingConfigurationScraperComponentsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.optionsInput"></a>

```typescript
public readonly optionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApsScraperScraperLoggingConfigurationScraperComponentsConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig">ApsScraperScraperLoggingConfigurationScraperComponentsConfig</a>

---


### ApsScraperScraperLoggingConfigurationScraperComponentsList <a name="ApsScraperScraperLoggingConfigurationScraperComponentsList" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

new apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.get"></a>

```typescript
public get(index: number): ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents">ApsScraperScraperLoggingConfigurationScraperComponents</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApsScraperScraperLoggingConfigurationScraperComponents[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents">ApsScraperScraperLoggingConfigurationScraperComponents</a>[]

---


### ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference <a name="ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

new apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.putConfig"></a>

```typescript
public putConfig(value: ApsScraperScraperLoggingConfigurationScraperComponentsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig">ApsScraperScraperLoggingConfigurationScraperComponentsConfig</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference">ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.configInput">configInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig">ApsScraperScraperLoggingConfigurationScraperComponentsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents">ApsScraperScraperLoggingConfigurationScraperComponents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.config"></a>

```typescript
public readonly config: ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference">ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.configInput"></a>

```typescript
public readonly configInput: IResolvable | ApsScraperScraperLoggingConfigurationScraperComponentsConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig">ApsScraperScraperLoggingConfigurationScraperComponentsConfig</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApsScraperScraperLoggingConfigurationScraperComponents;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents">ApsScraperScraperLoggingConfigurationScraperComponents</a>

---


### ApsScraperSourceEksConfigurationOutputReference <a name="ApsScraperSourceEksConfigurationOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

new apsScraper.ApsScraperSourceEksConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.resetClusterArn">resetClusterArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterArn` <a name="resetClusterArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.resetClusterArn"></a>

```typescript
public resetClusterArn(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.clusterArnInput">clusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.clusterArn">clusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration">ApsScraperSourceEksConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterArnInput`<sup>Optional</sup> <a name="clusterArnInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.clusterArnInput"></a>

```typescript
public readonly clusterArnInput: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApsScraperSourceEksConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration">ApsScraperSourceEksConfiguration</a>

---


### ApsScraperSourceOutputReference <a name="ApsScraperSourceOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

new apsScraper.ApsScraperSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.putEksConfiguration">putEksConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.putVpcConfiguration">putVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.resetEksConfiguration">resetEksConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.resetVpcConfiguration">resetVpcConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEksConfiguration` <a name="putEksConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.putEksConfiguration"></a>

```typescript
public putEksConfiguration(value: ApsScraperSourceEksConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.putEksConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration">ApsScraperSourceEksConfiguration</a>

---

##### `putVpcConfiguration` <a name="putVpcConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.putVpcConfiguration"></a>

```typescript
public putVpcConfiguration(value: ApsScraperSourceVpcConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.putVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration">ApsScraperSourceVpcConfiguration</a>

---

##### `resetEksConfiguration` <a name="resetEksConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.resetEksConfiguration"></a>

```typescript
public resetEksConfiguration(): void
```

##### `resetVpcConfiguration` <a name="resetVpcConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.resetVpcConfiguration"></a>

```typescript
public resetVpcConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.eksConfiguration">eksConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference">ApsScraperSourceEksConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference">ApsScraperSourceVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.eksConfigurationInput">eksConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration">ApsScraperSourceEksConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.vpcConfigurationInput">vpcConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration">ApsScraperSourceVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSource">ApsScraperSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eksConfiguration`<sup>Required</sup> <a name="eksConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.eksConfiguration"></a>

```typescript
public readonly eksConfiguration: ApsScraperSourceEksConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference">ApsScraperSourceEksConfigurationOutputReference</a>

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: ApsScraperSourceVpcConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference">ApsScraperSourceVpcConfigurationOutputReference</a>

---

##### `eksConfigurationInput`<sup>Optional</sup> <a name="eksConfigurationInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.eksConfigurationInput"></a>

```typescript
public readonly eksConfigurationInput: IResolvable | ApsScraperSourceEksConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration">ApsScraperSourceEksConfiguration</a>

---

##### `vpcConfigurationInput`<sup>Optional</sup> <a name="vpcConfigurationInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.vpcConfigurationInput"></a>

```typescript
public readonly vpcConfigurationInput: IResolvable | ApsScraperSourceVpcConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration">ApsScraperSourceVpcConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApsScraperSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSource">ApsScraperSource</a>

---


### ApsScraperSourceVpcConfigurationOutputReference <a name="ApsScraperSourceVpcConfigurationOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

new apsScraper.ApsScraperSourceVpcConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration">ApsScraperSourceVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApsScraperSourceVpcConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration">ApsScraperSourceVpcConfiguration</a>

---


### ApsScraperTagsList <a name="ApsScraperTagsList" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

new apsScraper.ApsScraperTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.get"></a>

```typescript
public get(index: number): ApsScraperTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags">ApsScraperTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApsScraperTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags">ApsScraperTags</a>[]

---


### ApsScraperTagsOutputReference <a name="ApsScraperTagsOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.Initializer"></a>

```typescript
import { apsScraper } from '@cdktn/provider-awscc'

new apsScraper.ApsScraperTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags">ApsScraperTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApsScraperTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags">ApsScraperTags</a>

---



